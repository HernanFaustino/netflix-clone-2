/* eslint-disable import/prefer-default-export */
import React from 'react';

import faqsData from '../fixtures/faqs.json';
import { Accordion, OptForm } from '../components';

export function FaqsContainer(props) {
  return (
    <Accordion>
      <Accordion.Tittle>Frequently ASked Question</Accordion.Tittle>
      {faqsData.map((item) => (
        <Accordion.Item key={item.id}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body>{item.body}</Accordion.Body>
        </Accordion.Item>
      ))}
      <OptForm>
        <OptForm.Input placeholder="Email address" />
        <OptForm.Button>Try it now</OptForm.Button>
        <OptForm.Break />
        <OptForm.Text>Ready to Watch? Enter your email to create or restart your membership</OptForm.Text>
      </OptForm>
    </Accordion>
  );
}
