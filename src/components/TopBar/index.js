import React, { Component } from "react";
import styles from "./index.module.scss";

export default class TopBar extends Component {
  render() {
    const { title } = this.props;
    return (
      <div className={styles.container}>
        <span className={styles.back}>《</span>
        <span className={styles.title}>{title}</span>
      </div>
    );
  }
}
