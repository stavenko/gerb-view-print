import injectSheet, { WithStylesProps } from "react-jss";
import React from "react";
import styles from "./styles";

export interface Props extends WithStylesProps<typeof styles> {
  foo: string;
  act: () => void;
}

const Layout = (props: Props) => {
  const { classes } = props;
  return (
    <main className={classes.mainLayout}>
      <header className={classes.headerLayout}>header</header>
      <aside className={classes.asideLayout}>aside</aside>
      <section className={classes.sectionLayout}>details</section>
    </main>
  );
};

export default injectSheet(styles)(Layout);
