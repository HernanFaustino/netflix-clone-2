import React, { createContext, useContext, useState } from 'react';
import { Container, Inner, Tittle, Item, Header, Body } from './styles/accordion';

const ToggleContext = createContext();

export default function Accordion({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Accordion.Tittle = function AccordionTittle({ children, ...restProps }) {
  return <Tittle {...restProps}>{children}</Tittle>;
};

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  const [toggleSHow, setToggleSHow] = useState(false);

  return (
    <ToggleContext.Provider value={{ toggleSHow, setToggleSHow }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  const { toggleSHow, setToggleSHow } = useContext(ToggleContext);
  return (
    <Header onClick={() => setToggleSHow((toggleSHow) => !toggleSHow)} {...restProps}>
      {children}
      {toggleSHow ? (
        <img src="/images/icons/close-slim.png" alt="Close" />
      ) : (
        <img src="/images/icons/add.png" alt="Open" />
      )}
    </Header>
  );
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
  const { toggleSHow } = useContext(ToggleContext);

  return toggleSHow ? <Body {...restProps}>{children}</Body> : null;
};
