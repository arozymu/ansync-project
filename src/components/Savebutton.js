import React from 'react'
import { jsx } from '@emotion/core'

import useConfig from '../hooks/config-context'
import style from './styles/done-button'
import useTimekeeperState from '../hooks/state-context'

export default function DoneButton() {
	const { onDoneClick, doneButton } = useConfig()
	const { getComposedTime } = useTimekeeperState()

	if (doneButton) {
		return doneButton(getComposedTime())
	}

	if (onDoneClick) {
		return (
			<span
				css={style}
				onClick={(e) => onDoneClick(getComposedTime(), e)}
				className="react-timekeeper__done-button"
			>
				Done
			</span>
		)
	}
	return null
}