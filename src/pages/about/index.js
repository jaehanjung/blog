import React, { Component } from 'react';
import Link from 'gatsby-link'
import '../../assets/css/about.css'
import ImgHeader from '../../components/ImgHeader';
import aboutimg from '../../assets/images/profile.png'

class About extends React.Component {
    render() {
        return (
            <div>
                <ImgHeader />
                <div className="section section2">
                    <div className="about content clearfix">
                        <div className="about-img">
                            <img src={aboutimg} alt="" />
                        </div>
                        <div className="about-title">
                            <h2><span>About</span> JaeHan, Welcome to my blog!</h2>
                            <p>이 블로그는 HTML, CSS, JavaScript, react 를 배우며 학습정리 및 지식을 공유하는 곳입니다. 저는 컴퓨터 전공도 아니고 이쪽에 지식이 없는 상태에서 프론트엔드를 처음 배우며 배운 것을 놓치지 않고 정리해서 올려 보려고 이 블로그를 만들었습니다.</p>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default About;

