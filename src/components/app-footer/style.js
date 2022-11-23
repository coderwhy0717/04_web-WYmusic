import styled from 'styled-components'

export const AppFooterWrapper = styled.div`
    border-top: 1px solid #e2e2e2;
    padding: 15px 0;
    padding-bottom: 80px;

    font-size: 12px;
    .content {
        display: flex;
        justify-content: space-between;
    }
`
export const FooterLeft = styled.div`
    color: #666;
    font-size: 12px;
    .link {
        a {
            color: #999;
        }
    }
    .line {
        margin: 0 4px;
        color: #999;
        &:last-child {
            display: none;
        }
    }
    .centertext {
        margin: 5px 0;
    }
    .footerbtm {
        img {
            margin-top: -3px;
            width: 13px;
            height: 13px;
        }
    }
`

export const FooterRight = styled.div`
 display: flex;

.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 40px;

  .link {
    display: block;
    width: 50px;
    height: 45px;

    background-image: url(${require("@/assets/img/sprite_footer_02.png")});
    background-size: 110px 450px;
  }

  :nth-child(1) .link {
    background-position: -60px -101px;
  }
  :nth-child(2) .link {
    background-position: 0 0;
  }
  :nth-child(3) .link {
    background-position: -60px -50px;
  }
  :nth-child(4) .link {
    background-position: 0 -101px;
  }

  .title {
    margin-top: 5px;
    display: block;
    width: 52px;
    height: 10px;
    background-image: url(${require("@/assets/img/sprite_footer_01.png")});
    background-size: 180px 100px;
  }

  :nth-child(1) .title {
    background-position: -.0px -90px;
  }
  :nth-child(2) .title {
    background-position: 0 0;
    margin-top: 7px;
  }
  :nth-child(3) .title {
    background-position: -.0px -54px;
    margin-top: 6px;
  }

  :nth-child(4) .title {
    background-position: -1px -72px;
    margin-top: 6px;
  }
}

`