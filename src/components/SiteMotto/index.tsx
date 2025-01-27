import React, { type FunctionComponent, type ReactElement } from 'react';
import { OuterWrapper, First, Third, Stylish } from './SiteMotto.styled';
// import { useRouter } from '../../router/useRouter'

const SiteMotto: FunctionComponent<any> = (): ReactElement => {
    // const { navigateAbout } = useRouter()
    return (
        <OuterWrapper>
            <First>Uplift yourself.</First>
            <Third>
                and your <Stylish>sweet</Stylish> home
            </Third>
            {/* <HowItWorks onClick={navigateAbout}>Learn how this works</HowItWorks> */}
        </OuterWrapper>
    );
};

export default SiteMotto;
