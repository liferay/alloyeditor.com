import ButtonCommand from '../base/button-command';
import ButtonIcon from './button-icon.jsx';
import React from 'react';

/**
 * @class ButtonItemSelectorVideo
 * @uses ButtonCommand
 */
class ButtonItemSelectorVideo extends React.Component {
	static defaultProps = {
		command: 'videoselector',
	};

	static key = 'video';

	render() {
		return (
			<button
				aria-label={AlloyEditor.Strings.video}
				className="ae-button"
				data-type="button-video"
				onClick={this._handleClick}
				tabIndex={this.props.tabIndex}
				title={AlloyEditor.Strings.video}>
				<ButtonIcon symbol="video" />
			</button>
		);
	}

	_handleClick = () => {
		this.execCommand(null);
	};
}

export default ButtonCommand(ButtonItemSelectorVideo);
