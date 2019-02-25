import React, { PureComponent } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import PropTypes from 'prop-types';
import _ from 'lodash';
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from '../Button';
import { PopupStyle } from '../styles/Styles';

class Popup extends PureComponent {
    render() {
        const {
            title,
            component,
            button,
            handleExecution,
            hidePopup,
            ...otherProps
        } = this.props;
        const Content = component;
        return (
            <PopupStyle>
                <Modal {...otherProps}>
                    <ModalHeader>{title}</ModalHeader>
                    <ModalBody>{Content && <Content />}</ModalBody>
                    <ModalFooter>
                        {_.get(button, 'primary') && (
                            <Button
                                primary
                                className={_.get(button, 'primary.className')}
                                onClick={handleExecution}
                            >
                                {_.get(button, 'primary.title')}
                            </Button>
                        )}
                        {_.get(button, 'secondary') && (
                            <Button
                                secondary
                                className={_.get(button, 'secondary.className')}
                                onClick={hidePopup}
                            >
                                {_.get(button, 'secondary.title')}
                            </Button>
                        )}
                    </ModalFooter>
                </Modal>
            </PopupStyle>
        );
    }
}

Popup.propTypes = {
    /* Popup header */
    title: PropTypes.string,
    /* Popup content */
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    /* Button configuration */
    button: PropTypes.shape({
        primary: PropTypes.shape({
            title: PropTypes.string,
            className: PropTypes.string,
        }),
        /* Secondary button configuration */
        secondary: PropTypes.shape({
            title: PropTypes.string,
            className: PropTypes.string,
        }),
    }),
    /* Action for main button of popup */
    handleExecution: PropTypes.func,
    /* Action for closing popup */
    hidePopup: PropTypes.func,
};

Popup.defaultProps = {
    title: '',
    component: '',
    button: {
        primary: {
            title: 'OK',
        },
    },
    handleExecution: () => {},
    hidePopup: () => {},
};

export default Popup;
