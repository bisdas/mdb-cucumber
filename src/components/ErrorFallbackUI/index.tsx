import React, { type FunctionComponent, type ReactElement } from 'react'
import { OuterWrapper, ContentWrapper, MessageTitle, MessageDetails, ReportLinkButton } from './ErrorFallbackUI.styled'
import { openEmailWriterWindow } from '../../utils/utils'
import { CUCUMBER_REPORT_ERROR_EMAIL_SUBJECT } from '../../configuration/constants'

const ErrorFallbackUI: FunctionComponent = (): ReactElement => {
    return (
        <OuterWrapper>
            <ContentWrapper>
                <MessageTitle>Sorry, something went wrong!</MessageTitle>
                <MessageDetails>
                    We hit a glitch! Kindly refresh the page. If you are seeing this error persistently, report it using
                    the button below.
                </MessageDetails>

                <ReportLinkButton
                    onClick={() => {
                        openEmailWriterWindow(CUCUMBER_REPORT_ERROR_EMAIL_SUBJECT)
                    }}
                >
                    Report an error
                </ReportLinkButton>
            </ContentWrapper>
        </OuterWrapper>
    )
}

export default ErrorFallbackUI
