'use client'

import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import * as Tabs from '@radix-ui/react-tabs';
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { BestDealBlockData } from "@/models/home.models";
import { GET_BEST_DEAL_DATA } from "@/db/queries/home";
import { getHomeBestDeal } from "@/lib/services/home-bestdeal.service";
import styles from '@/components/styles/BestDeal.module.scss';

const {
  BestDeal:BestDealCss,
  Heading,
  HeadingSubtitle,
  HeadingTitle,
  TabsContent,
  FlexBox,
  NavWrapper,
  NavLink,
  TabContent,
  TabPane,
  TableWrapper,
  Table,
  TableList,
  TableItem,
  ImgWrapper,
  Img,
  TextWrapper,
  TextTitle,
  TextDescr,
  ButtonLink,
  ButtonLinkIcon
} = styles;

const BestDeal = () => {

  const data = useSuspenseQuery<BestDealBlockData>(GET_BEST_DEAL_DATA);
  const bestDealData = getHomeBestDeal(data);

  return (
    <div className={BestDealCss}>
      <div className="container">
        <div className={FlexBox}>

          <div className={Heading}>
            <h6 className={HeadingSubtitle}>| Best Deal</h6>
            <h2 className={HeadingTitle}>Find Your Best Deal Right Now!</h2>
          </div>
          
          <Tabs.Root className={TabsContent} defaultValue="appartment">

            <Tabs.List className={NavWrapper}>
              {bestDealData.map((item) => {
                return (
                  <Tabs.Trigger key={item.id} className={NavLink} value={item.tabs.value}>{item.tabs.tabName}</Tabs.Trigger>
                );
              })}
            </Tabs.List>

            <div className={TabContent}>
              {bestDealData.map((item) => {
                return (
                  <Tabs.Content key={item.id} className={TabPane} value={item.tabs.value}>

                    <div className={TableWrapper}>
                      <div className={Table}>
                        <ul className={TableList}>
                          {Object.values(item.tabs.charTable).map((value, index) => {

                            if (!value.label) {
                              return null;
                            }

                            return (
                              <li key={index} className={TableItem}>{value.label} <span>{value.value}</span></li>
                            )

                          })}

                        </ul>
                      </div>
                    </div>

                    <div className={ImgWrapper}>
                      <Image priority className={Img} src={item.tabs.mainImage.sourceUrl} alt={item.tabs.value} width={546} height={422}/>
                    </div>

                    <div className={TextWrapper}>
                      <h4 className={TextTitle}>{item.tabs.textTitle}</h4>
                      <p className={TextDescr} dangerouslySetInnerHTML={{__html: item.tabs.textDescription}}/>
                      <Link className={ButtonLink} href="/property"><i className={ButtonLinkIcon}><Calendar size={20}/></i> Schedule a visit</Link>
                    </div>

                  </Tabs.Content>
                );
              })}
            </div>
          </Tabs.Root>
        </div>
      </div>
    </div>
  );
}

export default BestDeal;