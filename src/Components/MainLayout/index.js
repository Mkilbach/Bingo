import React from "react";
import { Typography, Divider, Image } from "antd";

import "./index.css";
import doge from "../../assets/doge.png";
import strong_doge from "../../assets/strong_doge.png";

const { Title } = Typography;

const MainLayout = ({ children }) => {
    return (
        <div className="container">
            <div className="titleContainer">
            <Image width={70} src={strong_doge} />
                <Title className="title" level={2}>
                    Bingo Kanału Team Speak 3
                </Title>
                <Image width={50} src={doge} />
            </div>
            <Divider plain>Knight-Online.pl</Divider>

            {children}
        </div>
    );
};

export default MainLayout;
