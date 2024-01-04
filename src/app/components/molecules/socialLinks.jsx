import Image from 'next/image';
import styled from 'styled-components';
import Icon from '../atoms/icon';

const SocialLinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const SocialLinkIcon = styled.a`
  background-color: transparent;
  border: none;
  cursor: pointer;
  height: 1.5rem;
  width: 1.5rem;
  display: block;
  text-decoration: none;
`;

const SocialLinks = () => {
  return (
    <SocialLinksContainer>
      <SocialLinkIcon href="https://www.facebook.com/DoctorWho" target="_blank">
        <Icon name="facebook" width={24} height={24} />
      </SocialLinkIcon>
      <SocialLinkIcon href="https://twitter.com/bbcdoctorwho" target="_blank">
        <Icon name="x" width={24} height={24} />
      </SocialLinkIcon>
      <SocialLinkIcon href="https://www.instagram.com/bbcdoctorwho/" target="_blank">
        <Icon name="instagram" width={24} height={24} />
      </SocialLinkIcon>
      <SocialLinkIcon href="https://www.tiktok.com/@doctorwho" target="_blank">
        <Icon name="tiktok" width={24} height={24} />
      </SocialLinkIcon>
    </SocialLinksContainer>
  );
};

export default SocialLinks;
