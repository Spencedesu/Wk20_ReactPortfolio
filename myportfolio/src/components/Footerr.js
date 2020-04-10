import React, { Component } from "react";
import {Footer, FooterSection, FooterLinkList} from "react-mdl";

class Footerr extends Component{
render(){
  return(
    <Footer size="mini">
        <FooterSection >
            <FooterLinkList  >
                <a href="/">Thanks for Visting my humble Portfolio</a>
                
            </FooterLinkList>
        </FooterSection>
    </Footer>
  )
}


}
export default Footerr;