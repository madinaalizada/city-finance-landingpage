import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Stories.css';
// Helpers
import classNames from 'classnames';

// Components
import Story, { storySchema } from './SubComponents/story';
import Modal from './SubComponents/modal.jsx';
import StoryViewer from './SubComponents/story-viewer.jsx';

// Styles
class Stories extends Component {

	static propTypes = {
		className: PropTypes.string,
		stories: PropTypes.arrayOf(PropTypes.shape(storySchema)),
		skin: PropTypes.oneOf([
			'snapgram',
		]),
		avatars: PropTypes.bool,
		// containerDefaultClass: 'stories',
		// storyDefaultClass: 'story',
		backButton: PropTypes.bool,
		backNative: PropTypes.bool,
		autoFullScreen: PropTypes.bool,
		openEffect: PropTypes.bool,
		cubeEffect: PropTypes.bool,
		list: PropTypes.bool,
		localStorage: PropTypes.bool,
		// onOpen: PropTypes.func,
		// onView: PropTypes.func,
		// onEnd: PropTypes.func,
		// onClose: PropTypes.func,
		// onNextItem: PropTypes.func,
	};

	static defaultProps = {
		className: 'stories',
		stories: [],
		skin: 'snapgram',
		avatars: true,
		// containerDefaultClass: 'stories',
		// storyDefaultClass: 'story',
		backButton: true,
		backNative: false,
		autoFullScreen: false,
		openEffect: true,
		cubeEffect: false,
		list: false,
		localStorage: true,
		language: {
			unmute: 'Touch to unmute',
			keyboardTip: 'Press space to see next',
			visitLink: 'Visit link',
			time: {
				ago: 'ago',
				hour: 'hour',
				hours: 'hours',
				minute: 'minute',
				minutes: 'minutes',
				fromnow: 'from now',
				seconds: 'seconds',
				yesterday: 'yesterday',
				tomorrow: 'tomorrow',
				days: 'days',
			},
		},
	};

	constructor(props) {
		super(props);
		this.state = {
			data: {},
			internalData: {
				seenItems: this.getLocalData('seenItems') || {},
			},
			activeStory: undefined,
		};
	}

	saveLocalData (key, data) {
		try {
			if (this.props.localStorage) {
				const keyName = 'zuck-' + this.id + '-' + key;

				window.localStorage[keyName] = JSON.stringify(data);
			}
		} catch (error) {
			console.error('Error in "saveLocalData function:"', error);
		}
	}

	getLocalData(key) {
		if (this.props.localStorage) {
			const keyName = 'zuck-' + this.id + '-' + key;

			return (window.localStorage[keyName]) ? JSON.parse(window.localStorage[keyName]) : false;
		} else {
			return false;
		}
	};

	nextItem() {
		const { activeStory } = this.state;
		const currentItemIndex = activeStory.items.findIndex(item => item.active) || 0;

		const nextItemIndex = currentItemIndex + 1;
		const nextItem = activeStory.items[nextItemIndex];

		if (nextItem) {
			const updatedItems = activeStory.items.map(item => {
				return Object.assign(item, {
					active: nextItem.id === item.id,
				});
			});
			this.setState({
				activeStory: {
					...this.state.activeStory,
					items: updatedItems,
				},
			});
		} else {
			this.nextStory();
		}
	}

	nextStory() {
		const { stories } = this.props;
		const { activeStory, internalData } = this.state;
		const updatedInternalData = {
			...internalData,
			seenItems: {
				...internalData.seenItems,
				[activeStory.id]: true,
			},
		};
		this.setState({
			internalData: updatedInternalData,
		}, () => {
			this.saveLocalData('seenItems', updatedInternalData.seenItems);
		});

		const activeStoryIndex = (activeStory)
			? stories.findIndex(story => activeStory.id === story.id)
			: -1;
		const nextStoryIndex = activeStoryIndex + 1;
		const nextStory = stories[nextStoryIndex];
		if (nextStory) {
			const nextStoryItems = nextStory.items.map((item, itemIndex) => Object.assign(item, {
				active: itemIndex === 0,
			}));
			this.setState({
				activeStory: {
					...nextStory,
					items: nextStoryItems,
				},
			});
		} else {
			this.closeModal();
		}
	}

	openModal(story) {
		const items = story.items.map((item, itemIndex) => Object.assign(item, {
			active: itemIndex === 0,
		}));
		this.setState({
			activeStory: Object.assign(story, { items }),
		});
	}

	closeModal() {
		// if (this.props.backNative) {
		// 	location.hash = '';
		// }
		this.setState({
			activeStory: undefined,
		});
	}

	render() {
		const {
			avatars,
			list,
			skin,
			stories,
			autoFullScreen,
			openEffect,
			cubeEffect,
		} = this.props;
		const className = classNames(this.props.className, {
			'user-icon': avatars,
			'story-preview': !avatars,
			list,
			carousel: !list,
		}, skin.toLowerCase());

		const {
			activeStory,
		} = this.state;

		return (<div id="stories">
        <h5>Yenilikl??r</h5>
			<div className={className} >
				{stories.map(story => (
					<Story
						key={story.id}
						open={() => this.openModal(story)}
						story={story} />
				))}
				<Modal
					openEffect={openEffect}
					cubeEffect={cubeEffect}
					animated={activeStory && openEffect}
					autoFullScreen={autoFullScreen}>
					{activeStory && (
						<StoryViewer
							nextItem={() => this.nextItem()}
							ref={ref => { this.storyViewer = ref; }}
							story={activeStory}
							close={() => this.closeModal()} />
					)}
				</Modal>
			</div>
            </div>
		);
	}
}

export default Stories;