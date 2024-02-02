import React, { Component } from "react";
import { Circles } from 'react-loader-spinner';
import styles from "./Loader.module.css";

class Loader extends Component {
    render() {
        return (
            <div className={styles.LoaderContainer}>
                <Circles
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="circles-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            </div>
            
        );
    }
}

export default Loader;