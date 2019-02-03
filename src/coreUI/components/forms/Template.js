import {css} from '@emotion/core'
import t from 'tcomb-form'
import React from 'react'
import Checkbox from '~/coreUI/components/basic/Checkbox'
import {XSmallLabel} from '~/coreUI/components/basic/Labels'
import Spacer from '~/coreUI/components/layouts/helpers/Spacer'
import {Row} from '~/coreUI/components/layouts/helpers/LinearLayout'
import PhoneNumber from '~/coreUI/components/compound/PhoneNumber'
import CountriesDropdown from '~/coreUI/components/compound/CountriesDropdown'

import Gender from '~/coreUI/components/compound/Gender'
import TextBox from '~/coreUI/components/basic/TextBox'

import renderError from './Errors'

// TODO : Change to a more suitable name (i.e. global state)
const getGlobalAttrs = locals => ({
  onKeyUp: locals.context.onKeyUp,
})

function setDisplayName(name, component) {
  component.displayName = name
  return component
}

export default {
  textbox: t.form.Form.templates.textbox.clone({
    renderInput(locals) {
      return (
        <TextBox
          {...getGlobalAttrs(locals)}
          {...locals.attrs}
          value={locals.value}
          placeholder={locals.attrs.placeholder}
          tabIndex={locals.attrs.tabIndex}
        />
      )
    },
    renderError: locals => renderError(locals),
  }),
  password: t.form.Form.templates.textbox.clone({
    renderInput: setDisplayName('passwordError', locals => (
      <TextBox
        {...getGlobalAttrs(locals)}
        {...locals.attrs}
        value={locals.value}
        placeholder={locals.attrs.placeholder}
        password
        icon="fas fa-eye fa-lg"
        iconPosition="right"
      />
    )),
    renderError: locals => renderError(locals),
  }),
  phoneNumber: t.form.Form.templates.textbox.clone({
    renderInput: locals => (
      <PhoneNumber
        {...getGlobalAttrs(locals)}
        {...locals.attrs}
        value={locals.value}
        onChange={value => {
          locals.onChange(value)
        }}
        placeholder={locals.attrs.placeholder}
      />
    ),
    renderError: locals => renderError(locals),
  }),
  country: t.form.Form.templates.textbox.clone({
    renderInput: locals => (
      <CountriesDropdown
        {...getGlobalAttrs(locals)}
        {...locals.attrs}
        value={locals.value}
        onChange={value => locals.onChange(value)}
        placeholder={locals.attrs.placeholder}
      />
    ),
    renderError: locals => renderError(locals),
  }),
  gender: t.form.Form.templates.radio.clone({
    renderRadios: locals => <Gender onChange={locals.onChange} />,
    renderError: locals => {
      const customErrorTextStyle = css`
        text-align: center;
      `
      return renderError(locals, customErrorTextStyle)
    },
  }),
  checkbox: t.form.Form.templates.checkbox.clone({
    renderCheckbox: locals => {
      const attrs = t.form.Form.templates.checkbox.getAttrs(locals)

      return (
        <React.Fragment>
          <Checkbox
            elemID={attrs.id}
            bold={attrs.importantLabel}
            label={attrs.label}
            fontSize={attrs.fontSize}
            {...attrs}
          />
          {attrs.checkboxNote && (
            <React.Fragment>
              <Spacer />
              <Row topAligned>
                <Spacer />
                <XSmallLabel color="subtle" paragraph>
                  {attrs.checkboxNote}
                </XSmallLabel>
              </Row>
            </React.Fragment>
          )}
        </React.Fragment>
      )
    },
    renderError: locals => renderError(locals),
  }),
}
