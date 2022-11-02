import React from "react";
import type { HeadFC } from "gatsby";
import { StatsProvider } from "components/StatsContext";
import TierStats from "components/TierStats";
import { Tab } from "@headlessui/react";

import "styles/global.css";

const IndexPage = () => {
  return (
    <main>
      <StatsProvider>
        <div>
          <Tab.Group>
            <Tab.List>
              <Tab>Prospect</Tab>
              <Tab>Challenger</Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                <TierStats tier="prospect" />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </StatsProvider>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
