'use client';
import Image from 'next/image';
import big_banner from '../../../../public/images/big_banner.png';
import vinjumuri_banner from '../../../../public/images/Vinjumuri_banner.jpg';
import featured_mobile_banner from '../../../../public/images/featured_mobile_banner.png';
import acheivement from '../../../../public/images/acheivements.png';
import acheivements from '../../../../public/images/acheivementss.png';
import ParallaxText from '@/components/Common/ParallaxImages';
import companies_image from '../../../../public/images/companies.png';
import { Wrapper, Inner, ImageContainer, ParallaxImages, Div } from './styles';
import RevealCover from '@/components/Common/RevealCover';
import { useIsMobile } from '../../../../libs/useIsMobile';
export const imageVariants = {
  hidden: {
    scale: 1.6,
  },
  visible: {
    scale: 1,
    transition: {
      duration: 1.4,
      ease: [0.6, 0.05, -0.01, 0.9],
      delay: 0.2,
    },
  },
};

const Featured = () => {
  const isMobile = useIsMobile();
  return (
    <Wrapper>
      <Inner>
        <ImageContainer>
          <RevealCover />
          <Div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.25, once: true }}
          >
            {isMobile ? (
              <Image
                src={vinjumuri_banner}
                alt="featured_mobile_banner"
                fill
              />
            ) : (
              <Image src={vinjumuri_banner} alt="big_banner" fill />
            )}
          </Div>
        </ImageContainer>
       
      </Inner>
    </Wrapper>
  );
};

export default Featured;
