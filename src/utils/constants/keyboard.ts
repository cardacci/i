/**
 * Keyboard constants for key detection
 * Using event.key values for better readability and cross-browser compatibility
 */
export const KEYBOARD_KEYS = {
	ARROW_DOWN: 'ArrowDown',
	ARROW_LEFT: 'ArrowLeft',
	ARROW_RIGHT: 'ArrowRight',
	ARROW_UP: 'ArrowUp',
	BACKSPACE: 'Backspace',
	DELETE: 'Delete',
	ENTER: 'Enter',
	ESCAPE: 'Escape',
	SPACE: ' ',
	TAB: 'Tab'
} as const;

/**
 * Type for keyboard key values
 */
export type KeyboardKey = (typeof KEYBOARD_KEYS)[keyof typeof KEYBOARD_KEYS];
