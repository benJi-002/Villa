'use client'

import * as Accordion from '@radix-ui/react-accordion';
import { ForwardedRef, ReactNode, forwardRef } from "react";
import clsx from 'clsx';
import { FaqBlockData } from "@/models/home.models";
import { GET_FAQ_DATA } from "@/db/queries/home";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { getHomeFAQ } from "@/lib/services/home-faq.service";
import styles from '@/components/styles/FaqAccordion.module.scss';

const {
  AccordionRoot,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger: AccordionTriggerCss,
  AccordionContent: AccordionContentCss,
  AccordionContentText
} = styles;

const FaqAccordion =  () => {

  const data = useSuspenseQuery<FaqBlockData>(GET_FAQ_DATA);
  const sliderData = getHomeFAQ(data);
  
  return (

    <Accordion.Root className={AccordionRoot} type="single" defaultValue="item-1" collapsible>

      {sliderData.map((item, i) => {
        return (
          <Accordion.Item className={AccordionItem} value={`item-${i+1}`} key={item.id}>
            <AccordionTrigger>{item.homeFAQ.question}</AccordionTrigger>
            <Accordion.Content className={AccordionContentCss}>
              <div className={AccordionContentText} dangerouslySetInnerHTML={{__html: item.homeFAQ.answer}} />
            </Accordion.Content>
          </Accordion.Item>
        )
      })}

    </Accordion.Root>
  );
}

const AccordionTrigger = forwardRef(({ children, className, ...props }:{
  children: ReactNode;
  className?: string;
}, forwardedRef: ForwardedRef<HTMLButtonElement | null>) => (
  <Accordion.Header className={AccordionHeader}>
    <Accordion.Trigger
      className={clsx(AccordionTriggerCss, className)}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Accordion.Trigger>
  </Accordion.Header>
));
AccordionTrigger.displayName = 'AccordionTrigger';

const AccordionContent = forwardRef(({ children, className, ...props }:{
  children: ReactNode;
  className?: string;
}, forwardedRef: ForwardedRef<HTMLDivElement | null>) => (
  <Accordion.Content
    className={clsx(AccordionContentCss, className)}
    {...props}
    ref={forwardedRef}
  >
    <div className={AccordionContentText}>{children}</div>
  </Accordion.Content>
));
AccordionContent.displayName = 'AccordionContent';

export default FaqAccordion;