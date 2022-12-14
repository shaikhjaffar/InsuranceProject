import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
//   useParams,
//   useRouteMatch
} from "react-router-dom"
import './style.css'

import PayrollIMG from "./Payroll.png"
import CF from "./CF.png"
import ProjectFun from "./ProjectFun.png"
import SalaryAdv from "./SalaryAdv.png"
import InsuranceFun from "./InsuranceFun.png"
import LRD from "./LRD.png"
import WorkingCap from "./WorkingCap.png"
import SCF from "./SCF.png"
import HRm from "./HRm.png"
import Production from "./production logo-01 1entertainment ptod.png"

export default function NestingExample() {
    return (
      <Router>
        <div>
        <div className="card2">
          <div className="row">
            <div className="col ">
              <ul class="cntnv" id="pills-tab" role="tablist">
               <a href="#Payroll"> <div className="colofnavbar me-1 ">
                  <img src={PayrollIMG} className="pro-image" />
                  <li role="presentation">
                    <span>
                      Payroll{" "}
                    </span>
                  </li>
                  <Link to="/">Home</Link>
                </div></a>

                <a href="#Salary-advance"><div className="colofnavbar me-1">
                  <img src={SalaryAdv} className="pro-image" />
                  <li role="presentation">
                    <span>
                      Salary Advance
                    </span>
                  </li>
                </div></a>

               <a href="#Insurance"><div className="colofnavbar me-1">
                  <img src={InsuranceFun} className="pro-image  " />
                  <li role="presentation">
                    <span>
                      Insurance Funding
                    </span>
                  </li>
                </div></a> 

               <a href="#Project-funding"> <div className="colofnavbar me-1">
                  <img src={ProjectFun} className="pro-image  " />
                  <li role="presentation">
                    <span>
                      Project Funding
                    </span>
                  </li>
                </div></a>

                <a href="#LRD"><div className="colofnavbar me-1">
                  <img src={LRD} className="pro-image " />
                  <li role="presentation">
                    <span>
                      LRD
                    </span>
                  </li>
                </div></a>

                <a href="#Supply-Chain"><div className="colofnavbar me-1">
                  <img src={SCF} className="pro-image " />
                  <li role="presentation">
                    <span>
                      Supply Chain <br></br>Financing
                    </span>
                  </li>
                </div></a>
               <a href="#Working-Capital">
                <div className="colofnavbar me-1">
                  <img src={WorkingCap} className="pro-image " />
                  <li role="presentation">
                    <span>
                      Working Cap
                    </span>
                  </li>
                </div></a>
   <a href="#Collateral">
                <div className="colofnavbar me-1">
                  <img src={CF} className="pro-image " />
                  <li role="presentation">
                    <span>
                      MSME/SME
                    </span>
                  </li>
                </div></a>

                <a href="#HRM">
                <div className="colofnavbar me-1">
                  <img src={HRm} className="pro-image" />
                  <li role="presentation">
                    <span>
                      HRMS
                    </span>
                  </li>
                </div>
                </a>

                <a href="#entm">
                <div>
                  <img src={Production} className="pro-image "/>
                  <li role="presentation">
                    <span
                    
                    >
                      Entmt &<br></br> Production
                    </span>
                  </li>
                </div></a>
              </ul>
            </div>
          </div>
        </div>


  {/******   switch */}
          {/* <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/topics">
              <Topics />
            </Route>
          </Switch> */}
        </div>
      </Router>
    );
  }

  <div class="tab-content text-dark" id="pills-tabContent">
  {/* start tab 1*/}
  <div
    className={
      showtab === 1 ? "tab-pane fade show active" : "tab-pane fade show"
    }
    id="Payroll"
  >
    <div>
      <div className="text">
        <p className="click shiftPayroll">1 Click</p>
        <p className="ProductName"> Payroll </p>
      </div>
      <div className="rectline2"> </div>
      <div className="circle"></div>
      <div className="rowProduct">
        <div className="col2">
          <div className="containerClass">
            <div className="inner-circle">
              <img
                className=" imagevec"
                src={Vect}
                alt="BigCo Inc. logo"
              />
            </div>
            <div className="insidetext">
              <p>
                {" "}
                Click on Registration<br></br>
                Button and Fill<br></br>
                Required Details.
               
              </p>
            </div>
          </div>
        </div>
        <div className="col2">
          <div className="containerClass">
            <div className="inner-circle">
              <img
                className=" imagevec"
                src={Vect1}
                alt="BigCo Inc. logo"
              />
            </div>
            <div className="insidetext">
              <p>
              Upload<br></br>
             Important<br></br>
               Documents
               
              </p>{" "}
            </div>
          </div>
        </div>
        <div className="col2">
          <div className="containerClass">
            <div className="inner-circle">
              <img
                className=" imagevec"
                src={Vect2}
                alt="BigCo Inc. logo"
              />
            </div>
            <div className="insidetext">
              <p>
                {" "}
                Avail the Loan<br></br>
               Selecting the<br></br>
                 EMI Option
               
              </p>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="circle"></div>
      <div className="Text3">
        <p> HOW IT WORKS</p>
      </div>
      <div className="rectline2"> </div>
      <div className="cardparatext">
        <div className="para1">
          <p>
            Approval : Application approval happens in less than 48
            hours<br></br>
            Immediate Access : Once you’re approved, simply log in and
            get instant access to your funds. <br></br>Our app and
            website gets you unded quickly and smoothly. <br></br>
            Utilization : You can utilize your funds 24*7 and with round
            the clock support from our end. <br></br>
            Limited paperwork : We require minimal documentation to get
            your app- lication approved.<br></br>
            Low Cost IR : Interest Rates are as low as 1.5% per month
            depending on your credit history and business revenue.{" "}
            <br></br>Importantly, you only pay for the financing you
            use.{" "}
          </p>
        </div>
      </div>
    </div>
  </div>
  {/* close tab 1*/}
  {/* start tab 2*/}
  <div
    className={
      showtab === 2 ? "tab-pane fade show active" : "tab-pane fade"
    }
    id="Salary-advance"
  > 
    <div>
      <div className="text">
        <p className="click shift2">1 Click</p>
        <p className="ProductName"> Salary Advance </p>
      </div>
      <div className="rectline2"> </div>
      <div className="circle"></div>
      <div className="rowProduct">
        <div className="col2">
          <div className="containerClass">
            <div className="inner-circle">
              <img
                className=" imagevec"
                src={Vect}
                alt="BigCo Inc. logo"
              />
            </div>
            <div className="insidetext">
              <p>
                {" "}
                Get your<br></br> Login Credentials
              </p>
            </div>
          </div>
        </div>
        <div className="col2">
          <div className="containerClass">
            <div className="inner-circle">
              <img
                className=" imagevec"
                src={Vect1}
                alt="BigCo Inc. logo"
              />
            </div>
            <div className="insidetext">
              <p>
                Login With Your<br></br>Username & Password
              </p>
            </div>
          </div>
        </div>
        <div className="col2">
          <div className="containerClass">
            <div className="inner-circle">
              <img
                className=" imagevec"
                src={Vect2}
                alt="BigCo Inc. logo"
              />
            </div>
            <div className="insidetext">
              <p>
                {" "}
                Get Limit Approved<br></br>& Dispense Money
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="circle"> </div>

      <div className="Text3">
        <p> HOW IT WORKS</p>
      </div>
      <div className="rectline2"> </div>
      <div className="cardparatext">
        <div className="para1">
          <p>
            •1 Click Salary Advance helps organizations to control
            employee <br></br>
            turnover by offering the opportunity of drawing contingency
            salaries.<br></br>It is a short-term credit repayed by
            opting for a 3-month EMI option.
            <br></br> • Employees gets 24x7 access to liquidity.
            <br></br>• No more waiting for month end for your salaries
            to be credited. <br></br>• 1 Click Salary advance comes with
            low-cost interest rate.
          </p>
        </div>
      </div>
    </div>
  </div>
  {/* close tab 2*/}
  {/* start tab 3*/}
  <div
    className={
      showtab === 3 ? "tab-pane fade show active" : "tab-pane fade"
    }
    id="Insurance"
  >
    <div>
      <div className="text">
        <p className="click shift2">1 Click</p>
        <p className="ProductName"> Insurance Funding </p>
      </div>
      <div className="rectline2"> </div>
      <div className="circle"></div>

      <div className="rowProduct">
        <div className="col2">
          <div className="containerClass">
            <div className="inner-circle">
              <img
                className=" imagevec"
                src={Vect}
                alt="BigCo Inc. logo"
              />
            </div>
            <div className="insidetext">
              <p>
                {" "}
                Click on Registration<br></br>
                Button and Fill<br></br>
                Required Details.
              </p>
            </div>
          </div>
        </div>
        <div className="col2">
          <div className="containerClass">
            <div className="inner-circle">
              <img
                className=" imagevec"
                src={Vect1}
                alt="BigCo Inc. logo"
              />
            </div>
            <div className="insidetext">
              <p>
              Upload<br></br>
             Important<br></br>
               Documents
              </p>
            </div>
          </div>
        </div>
        <div className="col2">
          <div className="containerClass">
            <div className="inner-circle">
              <img
                className=" imagevec"
                src={Vect2}
                alt="BigCo Inc. logo"
              />
            </div>
            <div className="insidetext">
              <p>
                {" "}
                Avail the Loan<br></br>
               Selecting the<br></br>
                 EMI Option
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="circle"></div>
      <div className="Text3">
        {" "}
        <p> HOW IT WORKS</p>
      </div>
      <div className="rectline2"> </div>
      <div className="cardparatext">
        <div className="para1">
          <p>
            {" "}
            Loan against Lapsed Policy : To fund the premium of policy
            holders whose policy has <br></br>
            lapsed and to enable them to renew their lapsed policy.{" "}
            <br></br>
            <h6>
              Features : Loan tenure 3 months to 1 year <br></br>
              Assignment of policy to NBFC <br></br>
              Declaration of Good Health{" "}
            </h6>{" "}
            <br></br>
            Loan against Existing Policy : To fund the future premium of
            policy holders whose policy <br></br>
            is in existence till a percentage of their surrender value.{" "}
            <br></br>
            <h6>
              {" "}
              Features : Loan tenure 3 months to 1 year <br></br>
              Assignment of policy to NBFC <br></br>
              Declaration of Good Health{" "}
            </h6>{" "}
            <br></br>
            Loan for purchase of New Policy : To fund new policy holders
            interested in enrolling for a new <br></br>
            policy by funding finances for their premiums. <br></br>
            <h6>
              {" "}
              Features : Loan tenure – 3 months – 1 year <br></br>
              Assignment of policy to NBFC <br></br>
              Rate of Interest – 1.25% per month for both traditional
              and ULIP policies <br></br>
              Processing Fee – 3% + GST
            </h6>{" "}
          </p>
        </div>
      </div>
    </div>
  </div>
  {/* close tab 3*/}
  {/* start tab 4*/}
  <div
    className={
      showtab === 4 ? "tab-pane fade show active" : "tab-pane fade"
    }
    id="Project-funding"
  >
    <div>
      <div className="text">
        <p className="click shift2">1 Click</p>
        <p className="ProductName">Project Funding</p>
      </div>
      <div className="rectline2"> </div>
      <div className="circle"></div>
       <div className="rowProduct">
        <div className="col2">
          <div className="containerClass">
            <div className="inner-circle">
              <img
                className=" imagevec"
                src={Vect}
                alt="BigCo Inc. logo"
              />
            </div>
            <div className="insidetext">
              <p>
                {" "}
                Click on Registration<br></br>
                Button and Fill<br></br>
                Required Details.
              </p>
            </div>
          </div>
        </div>
        <div className="col2">
          <div className="containerClass">
            <div className="inner-circle">
              <img
                className=" imagevec"
                src={Vect1}
                alt="BigCo Inc. logo"
              />
            </div>
            <div className="insidetext">
              <p>
              Upload<br></br>
             Important<br></br>
               Documents
              </p>
            </div>
          </div>
        </div>
        <div className="col2">
          <div className="containerClass">
            <div className="inner-circle">
              <img
                className=" imagevec"
                src={Vect2}
                alt="BigCo Inc. logo"
              />
            </div>
            <div className="insidetext">
              <p>
                {" "}
                Avail the Loan<br></br>
               Selecting the<br></br>
                 EMI Option
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="circle"> </div>
      <div className="Text3">
        <p> HOW IT WORKS</p>{" "}
      </div>
      <div className="rectline2"> </div>
      <div className="cardparatext">
        <div className="para1">
          <p>
            • 1 Click Capital’s Project Funding is a complete financial
            solution to fund your project start to end.<br></br>• This
            kind of funding is a long term funding, where the debt used
            to finance the project is paid back from the cash flow
            generated by the project.<br></br> Project Financing is ideal for
            ventures requiring huge amount of equity and debt. <br></br>
            • PF loan structure relies mainly on the project’s cash flow
            for its repayment strategy.<br></br>• Project funding is the
            means by which the money required to undertake a project, or
            program is secured and then made available as required.{" "}
            <br></br>
          </p>
        </div>
      </div>
    </div>
  </div>
  {/* close tab 4*/}
  {/* start tab 5*/}
  <div
    className={
      showtab === 5 ? "tab-pane fade show active" : "tab-pane fade"
    }
    id="LRD"
  >
    <div>
      <div className="text">
        <p className="click shift4">1 Click</p>
        <p className="ProductName"> LRD/ Lease Rental Discounting </p>
      </div>
      <div className="rectline2"> </div>
      <div className="circle"></div>
      <div className="rowProduct">
        <div className="col2">
          <div className="containerClass">
            <div className="inner-circle">
              <img
                className=" imagevec"
                src={Vect}
                alt="BigCo Inc. logo"
              />
            </div>
            <div className="insidetext">
              <p>
                {" "}
                Click on Registration<br></br>
                Button and Fill<br></br>
                Required Details.
              </p>
            </div>
          </div>
        </div>
        <div className="col2">
          <div className="containerClass">
            <div className="inner-circle">
              <img
                className=" imagevec"
                src={Vect1}
                alt="BigCo Inc. logo"
              />
            </div>
            <div className="insidetext">
              <p>
              Upload<br></br>
             Important<br></br>
               Documents
              </p>
            </div>
          </div>
        </div>
        <div className="col2">
          <div className="containerClass">
            <div className="inner-circle">
              <img
                className=" imagevec"
                src={Vect2}
                alt="BigCo Inc. logo"
              />
            </div>
            <div className="insidetext">
              <p>
                {" "}
                Avail the Loan<br></br>
               Selecting the<br></br>
                 EMI Option
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="circle"></div>
      <div className="Text3">
        {" "}
        <p> HOW IT WORKS</p>{" "}
      </div>
      <div className="rectline2"> </div>
      <div className="cardparatext">
        <div className="para1">
          <p>
            • Looking for Funding? Do you have a property that you are
            putting up for lease? 1 Click Capital now offers you instant
            capital against your leased property. This way you can get
            quick funds using your rental as a collateral. <br></br>•
            LRD is a form of term loan that grants you a funds using
            rental receipts as a collateral. It works on the premise of
            rental properties being owed a fixed amount of rent.
            <br></br> • How does LRD works? There are many commercial
            properties that are up for lease.<br></br> A term loan known as Lease
            Rental Discounting is provided against commercial real
            estate or property.
            <br></br>
            Lease rental discounting works like factoring. LRD works
            when you enter into a rental contract with a tenant.<br></br> We
            offer you capital at 2 % of your entire rent capital for the
            next 1 or 2 years. <br></br>The renter then pays the rent inform of
            EMIs to the lending party. <br></br>• Lease Rental
            Discounting agreements have to be signed between three
            parties: the owner, the lender (1 Click Capital) and the
            tenant. <br></br>• If you own a property and there is a
            prospect of fixed rentals for the long term, you can be
            eligible for the Lease Rental Discounting or LRD Loan.{" "}
            <br></br>• If you are the owner of a property with a
            perspective fixed rental for a long tenure you can be
            eligible for Lease Rental Discounting. <br></br>
          </p>
        </div>
      </div>
    </div>
  </div>
  {/* close tab 5*/}
  {/* start tab 6*/}
  <div
    className={
      showtab === 6 ? "tab-pane fade show active" : "tab-pane fade"
    }
    id="Supply-Chain"
  >
    <div>
      <div className="text">
        <p className="click shift3">1 Click</p>
        <p className="ProductName "> Supply Chain Financing </p>
      </div>
      <div className="rectline2"> </div>
      <div className="circle"></div>
      <div className="rowProduct">
        <div className="col2">
          <div className="containerClass">
            <div className="inner-circle">
              <img
                className=" imagevec"
                src={Vect}
                alt="BigCo Inc. logo"
              />
            </div>
            <div className="insidetext">
              <p>
                {" "}
                Click on Registration<br></br>
                Button and Fill<br></br>
                Required Details.
              </p>
            </div>
          </div>
        </div>
        <div className="col2">
          <div className="containerClass">
            <div className="inner-circle">
              <img
                className=" imagevec"
                src={Vect1}
                alt="BigCo Inc. logo"
              />
            </div>
            <div className="insidetext">
              <p>
              Upload<br></br>
             Important<br></br>
               Documents
              </p>
            </div>
          </div>
        </div>
        <div className="col2">
          <div className="containerClass">
            <div className="inner-circle">
              <img
                className=" imagevec"
                src={Vect2}
                alt="BigCo Inc. logo"
              />
            </div>
            <div className="insidetext">
              <p>
                {" "}
                Avail the Loan<br></br>
               Selecting the<br></br>
                 EMI Option
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="circle"></div>
      <div className="Text3">
        {" "}
        <p> HOW IT WORKS</p>
      </div>
      <div className="rectline2"> </div>
      <div className="cardparatext">
        <div className="para1">
          <p>
            • Supply chain finance (SCF) are used to reduce financing
            costs and boost company efficiency for buyers and sellers
            involved in a sales transaction.<br></br> SCF techniques operate by
            automating business operations and monitoring the approval
            and settlement of invoices from start to finish. <br></br>
            SCF is a combination of technology based business and
            financing that lowers costs and improves competency for all
            the parties involved in the transaction.<br></br> • This is a short
            term line of credit that optimizes working capital for both
            the seller and buyer equally. <br></br>• The main benefit of
            Supply chain finance is the convenience that is added to the
            sales process. <br></br>It adds protection for the buyer and seller,
            increases business transi- tions. <br></br>It’s like a win-win
            situation for all the parties involved. <br></br>
          </p>
        </div>
      </div>
    </div>
  </div>
  {/* close tab 6*/}
  {/* start tab 7*/}
  <div
    className={
      showtab === 7 ? "tab-pane fade show active" : "tab-pane fade"
    }
    id="Working-Capital"
  >
    <div>
      <div className="text">
        <p className="click shift2">1 Click</p>
        <p className="ProductName"> Working Capital </p>
      </div>
      <div className="rectline2"> </div>
      <div className="rowProduct">
        <div className="col2">
          <div className="containerClass">
            <div className="inner-circle">
              <img
                className=" imagevec"
                src={Vect}
                alt="BigCo Inc. logo"
              />
            </div>
            <div className="insidetext">
              <p>
                {" "}
                Click on Registration<br></br>
                Button and Fill<br></br>
                Required Details.
              </p>
            </div>
          </div>
        </div>
        <div className="col2">
          <div className="containerClass">
            <div className="inner-circle">
              <img
                className=" imagevec"
                src={Vect1}
                alt="BigCo Inc. logo"
              />
            </div>
            <div className="insidetext">
              <p>
              Upload<br></br>
             Important<br></br>
               Documents
              </p>
            </div>
          </div>
        </div>
        <div className="col2">
          <div className="containerClass">
            <div className="inner-circle">
              <img
                className=" imagevec"
                src={Vect2}
                alt="BigCo Inc. logo"
              />
            </div>
            <div className="insidetext">
              <p>
                {" "}
                Avail the Loan<br></br>
               Selecting the<br></br>
                 EMI Option
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="circle"></div>
      <div className="Text3">
        <p> HOW IT WORKS</p>
      </div>
      <div className="rectline2"> </div>
      <div className="cardparatext">
        <div className="para1">
          <p>
            • Working capital is that money used to conduct the day to
            day functions and operations of a business. <br></br>•
            Without the availability of free flow of working capital a
            company may find it difficult to function efficiently.{" "}
            <br></br>• In order to function smoothly and have a seamless
            operations of the business one can acquire a working capital
            loan. <br></br>• An organization’s working capital is the
            reflection of its financial stability and liquidity. • A
            Working Capital Loan is issued to fund the day to day
            activities and operations of a business for example covering
            accounts payable, inventory, paying employees. <br></br>• It
            is not possible for every business to have a stable level of
            sales and revenue through- out the year, due to which there
            can arise a need for capital to keep the operations going
            smoothly. <br></br>• Business with a seasonal sales cycle
            especially need these kinds of loan. <br></br>1 Click capital’s
            working capital loan is an unsecured loan that requires no
            collateral.
          </p>
        </div>
      </div>
    </div>
  </div>
  {/* close tab 7*/}
  {/* start tab 8*/}
  <div
    className={
      showtab === 8 ? "tab-pane fade show active" : "tab-pane fade"
    }
    id="Collateral"
  >
    <div>
      <div className="text">
        <p className="click shift">1 Click</p>
        <p className="ProductName "> Collateral Free MSME/SME Loan </p>
      </div>
      <div className="rectline2"> </div>
      <div className="circle"></div>
      <div className="rowProduct">
        <div className="col2">
          <div className="containerClass">
            <div className="inner-circle">
              <img
                className=" imagevec"
                src={Vect}
                alt="BigCo Inc. logo"
              />
            </div>
            <div className="insidetext">
              <p>
                {" "}
                Click on Registration<br></br>
                Button and Fill<br></br>
                Required Details.
              </p>
            </div>
          </div>
        </div>
        <div className="col2">
          <div className="containerClass">
            <div className="inner-circle">
              <img
                className=" imagevec"
                src={Vect1}
                alt="BigCo Inc. logo"
              />
            </div>
            <div className="insidetext">
              <p>
              Upload<br></br>
             Important<br></br>
               Documents
              </p>
            </div>
          </div>
        </div>
        <div className="col2">
          <div className="containerClass">
            <div className="inner-circle">
              <img
                className=" imagevec"
                src={Vect2}
                alt="BigCo Inc. logo"
              />
            </div>
            <div className="insidetext">
              <p>
                {" "}
                Avail the Loan<br></br>
               Selecting the<br></br>
                 EMI Option
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="circle"> </div>
      <div className="Text3">
        <p> HOW IT WORKS</p>
      </div>
      <div className="rectline2"> </div>

      <div className="cardparatext">
        <div className="para1">
          <p>
            • A MSME or SME loan is a credit service offered to micro,
            small or medium enterprises, it maybe offered to
            individuals, startups, existing businesses, self-employed
            professio- nals, and other businesses. <br></br>• 1 Click
            Capital offers Collateral Free MSME and SME loans with the
            primary purpose of helping business get capital for business
            expansion, or starting a new business, fulfilling day to day
            business requirements, meeting working capital needs,
            improving cash flow, investing in raw material, inventories
            or stocks, upgrading old equipment or buying new machinery
            etc. <br></br>• The repayment terms can be upto 3 months.{" "}
            <br></br>• We offer you a line of credit without any
            collateral and at minimum paper work.
          </p>
        </div>
      </div>
    </div>
  </div>
  {/* close tab 8*/}
  {/* start tab 9*/}
  <div
    className={
      showtab === 9 ? "tab-pane fade show active" : "tab-pane fade"
    }
    id="HRM"
  >
    <div>
      <div className="text">
        <p className="click shift">1 Click</p>
        <p className="ProductName ">
          {" "}
          Human Resources Management Systems{" "}
        </p>
      </div>
      <div className="rectline2"> </div>
      <div className="circle"></div>

      <div className="rowProduct">
        <div className="col2">
          <div className="containerClass">
            <div className="inner-circle">
              <img
                className=" imagevec"
                src={Vect}
                alt="BigCo Inc. logo"
              />
            </div>
            <div className="insidetext">
              <p>
                {" "}
                Click on Registration<br></br>
                Button and Fill<br></br>
                Required Details.
              </p>
            </div>
          </div>
        </div>
        <div className="col2">
          <div className="containerClass">
            <div className="inner-circle">
              <img
                className=" imagevec"
                src={Vect1}
                alt="BigCo Inc. logo"
              />
            </div>
            <div className="insidetext">
              <p>
              Upload<br></br>
             Important<br></br>
               Documents
              </p>
            </div>
          </div>
        </div>
        <div className="col2">
          <div className="containerClass">
            <div className="inner-circle">
              <img
                className=" imagevec"
                src={Vect2}
                alt="BigCo Inc. logo"
              />
            </div>
            <div className="insidetext">
              <p>
                {" "}
                Avail the Loan<br></br>
               Selecting the<br></br>
                 EMI Option
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="circle"></div>
      <div className="Text3">
        <p> HOW IT WORKS</p>
      </div>
      <div className="rectline2"> </div>
      <div className="cardparatext">
        <div className="para1">
          <p>
            • Human Resources Management System or HRMS refers to a
            combination of software and services that deals with 360
            degree of internal Human Resources functions thro- ughout an
            employees work cycle. <br></br>• 1 Click Capital’s HRMS
            services deals with employee data management to process
            payroll, employee recruitment, benefits, talent management,
            employee attendance, employees engagement etc..<br></br>•
            Our HRMS enables your organization to fully understand your
            workforce while simul- taneously staying compliant with tax
            laws and labor regulation laws. It is a useful tool to help
            you manage a modern workforce. <br></br>• A company’s
            workforce is the most valuable assets of any business. We
            help you put together the most valuable information in front
            of you. <br></br>• Our most valued service 1 Click Payroll
            funding along with our HRMS service gives you a 360 degree
            human resource solution, wherein you get a line of credit to
            fund your payrolls on time at a low cost ROI while also the
            benefits of payroll processing all under one roof.{" "}
          </p>
        </div>
      </div>
    </div>
  </div>
  {/* close tab 9*/}
  {/* start tab 10*/}
  <div
    className={
      showtab === 10 ? "tab-pane fade show active" : "tab-pane fade"
    }
    id="entm"
  >
    <div>
      <div className="text">
        <p className="click shift">1 Click</p>
        <p className="ProductName">
          {" "}
          Entertainment & Production Financing{" "}
        </p>
      </div>
      <div className="rectline2"> </div>
      <div className="circle"></div>
      <div className="rowProduct">
        <div className="col2">
          <div className="containerClass">
            <div className="inner-circle">
              <img
                className=" imagevec"
                src={Vect}
                alt="BigCo Inc. logo"
              />
            </div>
            <div className="insidetext">
              <p>
                {" "}
                Click on Registration<br></br>
                Button and Fill<br></br>
                Required Details.
              </p>
            </div>
          </div>
        </div>
        <div className="col2">
          <div className="containerClass">
            <div className="inner-circle">
              <img
                className=" imagevec"
                src={Vect1}
                alt="BigCo Inc. logo"
              />
            </div>
            <div className="insidetext">
              <p>
              Upload<br></br>
             Important<br></br>
               Documents
              </p>
            </div>
          </div>
        </div>
        <div className="col2">
          <div className="containerClass">
            <div className="inner-circle">
              <img
                className=" imagevec"
                src={Vect2}
                alt="BigCo Inc. logo"
              />
            </div>
            <div className="insidetext">
              <p>
                {" "}
                Avail the Loan<br></br>
               Selecting the<br></br>
                 EMI Option
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="circle"></div>
      <div className="Text3">
        {" "}
        <p> HOW IT WORKS</p>{" "}
      </div>
      <div className="rectline2"> </div>
      <div className="cardparatext">
        <div className="para1">
          • This is the age of entertainment, an era where we are
          surrounded by content left right and center. <br></br>IF you are ready
          to bring your script to life and get those cameras rolling on
          your next project you might want to think of getting an
          Entertainment & Production Financing E&PF.<br></br> E&PF helps you map
          out the best financial plan and solidifying the right funding
          option for you. <br></br>
        </div>
        <div className="Content-left-mai-lene-k-liye">
          How E&PF Works? <br></br>• For setting up an E&PF we start by
          signing a term sheet based on the<br></br>
          credit approval of the project. <br></br>• Then we set up
          Escrow accounts which is confirmed by the OTT.<br></br>• After
          the agreement is signed, the disbursal sequences happens
          through the Escrow <br></br>
          •The payments of the proposed contracts is received through
          the Escrow.<br></br>• The commercial structure is decided
          according to each product.<br></br>
          Eligibility for E&PF:<br></br>• Contract with any top 5 OTT
          Platforms<br></br>• Experience of more than 3 years OR 3
          completed projects<br></br>• Proposed project profitability
          and cash flows<br></br>
          Documentation required for E&PF:<br></br>
          •Company Financials of 3 years<br></br>
          •Company Profile with details of earlier finished projects
          <br></br>
          •1 year Bank Statement<br></br>
          •GST returns<br></br>
          •Compatible KYC documents<br></br>
          •Proposed Project P&L and cash flow<br></br>
        </div>
      </div>
    </div>
  </div>
  {/* close tab 10*/}
</div>
  