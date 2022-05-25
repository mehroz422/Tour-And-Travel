import React, { Component } from 'react';
import styled from "styled-components";
import Footer from './Footer';


class TourGuide extends Component {
    state = { 
        pic : ("./assets/images/T1.png"),
        pic1 : ("./assets/images/T2.png"),
        pic2 : ("./assets/images/T3.png"),
        pic3 : ("./assets/images/T4.png"),
        pic4 : ("./assets/images/T5.jpg"),
        pic5 : ("./assets/images/T6.jpg"),
        pic6 : ("./assets/images/T7.jpg"),
     } 
    render() { 
        return (
            <Section>
            <img src={this.state.pic} alt="..." style={{width:"100%"}}/>

            <div>
                <link to="tourguide"></link>
                <div class="container" style={{paddingTop:"30px"}}>
    <div class="row text-center">
        <h1 class="white">Our Tour Guide</h1>
    </div><br />
    <div class="row">
        <div class="col-md-4 col-sm-6">
            <div class="our-team">
                <div class="pic">
                    <img src={this.state.pic1}/>
                </div>
                <div class="team-content">
                    <h3 class="title">Sakura Chen</h3>
                    <span class="post">Tour Guide</span>
                    <ul class="social">
                        <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fab fa-google-plus"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-md-4 col-sm-6">
            <div class="our-team">
                <div class="pic">
                    <img src={this.state.pic2}/>
                </div>
                <div class="team-content">
                    <h3 class="title">Sakura Chen</h3>
                    <span class="post">Tour Guide</span>
                    <ul class="social">
                        <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fab fa-google-plus"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-md-4 col-sm-6">
            <div class="our-team">
                <div class="pic">
                    <img src={this.state.pic3}/>
                </div>
                <div class="team-content">
                    <h3 class="title">Sakura Chen</h3>
                    <span class="post">Tour Guide</span>
                    <ul class="social">
                        <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fab fa-google-plus"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
        
    </div>

    <br/>
    <br/>


    <div class="row">
        <div class="col-md-4 col-sm-6">
            <div class="our-team">
                <div class="pic">
                    <img src={this.state.pic4}/>
                </div>
                <div class="team-content">
                    <h3 class="title">Williamson</h3>
                    <span class="post">Tour Guide</span>
                    <ul class="social">
                        <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fab fa-google-plus"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-md-4 col-sm-6">
            <div class="our-team">
                <div class="pic">
                    <img src={this.state.pic5}/>
                </div>
                <div class="team-content">
                    <h3 class="title">Kristiana</h3>
                    <span class="post">Tour Guide</span>
                    <ul class="social">
                        <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fab fa-google-plus"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-md-4 col-sm-6">
            <div class="our-team">
                <div class="pic">
                    <img src={this.state.pic6}/>
                </div>
                <div class="team-content">
                    <h3 class="title">Williamson</h3>
                    <span class="post">Tour Guide</span>
                    <ul class="social">
                        <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fab fa-google-plus"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
        
    </div>

</div>

            </div>
            <br/>
            <br/>
            <Footer/>
            </Section>
            
        );
    }
}
 
export default TourGuide;

const Section = styled.section`

.our-team {
    text-align: center;
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    transition: all 0.3s ease 0s;
}

.our-team .pic {
    background: #f6931e;
    transition: all 0.3s ease 0s;
}

.our-team:hover .pic {
    padding: 10px;
    border-radius: 10px;
    transform: scale(0.5) translateY(-30%);
}

.our-team .pic img {
    width: 100%;
    height: auto;
}

.our-team .team-content {
    width: 100%;
    padding: 7px 15px;
    background: #f6931e;
    position: absolute;
    bottom: -30%;
    right: 0;
    opacity: 0;
    transition: all 0.3s ease 0s;
}

.our-team:hover .team-content {
    opacity: 1;
    bottom: -10px;
}

.our-team .title {
    font-size: 22px;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 0 0 5px 0;
}

.our-team .post {
    display: block;
    font-size: 15px;
    font-weight: 600;
    color: #fff;
    font-style: italic;
    text-transform: capitalize;
    margin: 0 0 5px 0;
}

.our-team .social {
    padding: 0;
    margin: 0;
    list-style: none;
    transition: all 0.35s ease 0s;
}

.our-team .social li {
    display: inline-block;
    margin: 0 5px 0 0;
}

.our-team .social li a {
    display: block;
    width: 40px;
    height: 40px;
    line-height: 40px;
    border-radius: 15px 0 15px 0;
    font-size: 20px;
    color: #fff;
    overflow: hidden;
    z-index: 1;
    position: relative;
    transition: all 0.35s ease 0s;
}

.our-team .social li a:before {
    content: "";
    width: 100%;
    height: 100%;
    background: #e06f06;
    position: absolute;
    top: 0;
    left: -100%;
    z-index: -1;
    transition: all 0.3s ease-in-out 0s;
}

.our-team .social li a:hover:before {
    left: 0;
}

@media only screen and (max-width: 990px) {
    .our-team {
        margin-bottom: 30px;
    }
}
`;