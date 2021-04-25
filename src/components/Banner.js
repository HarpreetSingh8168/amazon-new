import React from "react";
import styled from "styled-components";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  {
    url:
      "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/OPPO/F19/Preheat/GW/D22052977_WL_OPPO_F19_NewLaunch_Tall_hero_1500x600._CB655780649_.jpg",
  },
  {
    url:
      "https://images-eu.ssl-images-amazon.com/images/G/31/img21/under_1499_updated/v1/tall_hero_1500x600._CB655764075_.jpg",
  },
  {
    url:
      "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Gateway/SuperSale_Herotator_1st-3rdMar/Rev_FST_GW_PC_BUNK_1500x600._CB655793405_.jpg",
  },
  {
    url:
      "https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Rajeshwari/March-21/Network_Hero_banners/HeroPC_1500x600_5._CB657961025_.jpg",
  },
  {
    url:
      "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Xiaomi/Mi10i/GW/April/D21934943_WLD_Xiaomi_Mi10i_BAU_DesktopTallHero_1500x600._CB655778898_.jpg",
  },
];
function Banner() {
  return (
    <Container>
      <SliderImageContainer>
        <SimpleImageSlider
          width={1000}
          height={500}
          images={images}
          showNavs={true}
          showBullets={true}
        />
      </SliderImageContainer>
    </Container>
  );
}

export default Banner;

const Container = styled.div`
width:100%;
display:flex;
justify-content:center;
`;

const SliderImageContainer = styled.div`
  width: 70%;
  height: 500px;
  object-fit: contain;
  border-radius: 19px;
  box-shadow: 3px 5px 5px gray;
`;
