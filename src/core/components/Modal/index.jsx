import React from 'react';
import ReactDOM from 'react-dom';
import styled from '@emotion/styled';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';
import Media from 'react-media';
import { withRouter } from 'react-router-dom';

import withModalTracker from '~/core/utils/modalHelpers/withModalTracker';
import Icon from '~/coreUI/components/basic/Icon';
import { Column } from '~/coreUI/components/layouts/helpers/LinearLayout';
import { cssMediaMin, cssMediaMax, mediaQueryMin, mediaQueryMax } from '~/core/utils/cssHelpers/cssMedia';
import Image from '~/coreUI/components/basic/Image';


const customStyles = {
  content: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    padding: '0px',
    borderRadius: '0px',
    border: 'none',
  },
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
ReactModal.setAppElement('#root');

const TabletCloseIcon = styled(Image)`
  max-width: 17px;
  max-height: 17px;
  
  position: absolute;
  top: ${props => props.theme.paddings.xxLarge}px;
  right: ${props => props.theme.paddings.xxLarge}px;
  z-index: 3;
`;
const CloseIcon = styled(Icon)`
  &&& {
    align-self: flex-end;
    margin-bottom: 5px;

    font-size: 25px !important;
    color: white;
    cursor: pointer;
    z-index: 3;
  }
  font-size: 17px !important;
  color: white;
  cursor: pointer;
  z-index: 1;

  @media (max-width: 1024px) {
    color: black;
  }
`;


const ModalContainer = styled.div`  
  width: 100%;
  
  ${cssMediaMin.desktop`
    height: 100%;
  `}
   
  ${cssMediaMax.tablet`
    position: absolute;
    top: 0;
    min-height: 100vh;
    overflow-x: hidden;
  `}  
  
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  
  background-color: rgba(0,0,0,0.7);
  
  ${cssMediaMax.tablet`
    background-color: white;
  `}
`;

const ModalContent = styled(Column)`
  ${cssMediaMax.tablet`
    align-self: flex-start;
    width: 100%;
    height: 100%;
  `}
`;

class Modal extends React.Component {
  componentDidMount = () => {
    this.props.onModalOpened();
  }
  closeModal = () => {
    // eslint-disable-next-line
    this.props.closeCurrentModal();
  }

  clickedOutsite = (e, isDesktop) => {
    if (!isDesktop) {
      return;
    }
    // eslint-disable-next-line
    const domNode = ReactDOM.findDOMNode(this.modalContainer);
    if (domNode === e.target) {
      this.closeModal();
    }
  }
  renderContent = () => (
    <ModalContent centerAligned>
      <Media query={mediaQueryMax('tablet')}>
        {matches => (
          matches ? (
            <TabletCloseIcon src="/images/AccountManagement/close-copy.png" onClick={() => this.closeModal()} />
          ) : (
            <CloseIcon className="close icon closePopup" onClick={() => this.closeModal()} />
          )
        )}
      </Media>
      {this.props.children}
    </ModalContent>
  );

  render = () => {
    const { location, history } = this.props;

    return (
      <div>
        <ReactModal
          isOpen
          style={customStyles}
        >
          <Media query={mediaQueryMin('desktop')}>
            {matches => (
              <ModalContainer
                ref={(ref) => { this.modalContainer = ref; }}
                onClick={e => this.clickedOutsite(e, location, history, matches)}
              >
                {this.renderContent()}
              </ModalContainer>
            )}
          </Media>
        </ReactModal>
      </div>
    );
  }
}


Modal.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  history: PropTypes.string.isRequired,
  closeCurrentModal: PropTypes.func.isRequired,
}.isRequired;


export default withRouter(withModalTracker(Modal));
