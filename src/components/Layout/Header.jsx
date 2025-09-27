import React from "react";
import SubHeader from './SubHeader'
const Header = () => {
  return (
    <>
        <div class="page-header">
            <div class="row align-items-center">
                <div class="col-md-8">
                    <h1 class="display-5">Header-</h1>
                    <p class="lead mb-0"></p>
                </div>
                <div class="col-md-4 text-md-end">
                    fff
                </div>
            </div>
        </div>
        <SubHeader/>
    </>
  );
};
export default Header;
