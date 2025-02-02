"use client"
import React, { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

const FuturePlan = () => {
    const [tabIndex, setTabIndex] = useState(0);
    return (
        <div className='container mx-auto px-4 mb-10'>
            <div className='text-center'>

                <h3 className='text-[#1F80F0] text-xl font-semibold mb-4'>TECHNOLOGY BUILT FOR YOU
                </h3>
                <h1 className='text-[#142a42] text-6xl font-semibold'>The future of finance</h1>
            </div>


            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className='text-center flex items-center justify-center gap-5  mb-20 mt-10'>

                    <Tab className='px-12 py-3 rounded-full mb-2  text-xl hover:bg-[#b4d2f5] font-bold  text-[#1a81f7]'>Customer focused</Tab>
                    <Tab className='px-12 py-3 rounded-full mb-2  text-xl hover:bg-[#b4d2f5] font-bold  text-[#1a81f7]'>Agile and adaptable</Tab>
                    <Tab className='px-12 py-3 rounded-full mb-2  text-xl hover:bg-[#b4d2f5] font-bold  text-[#1a81f7]'>Compliance ready</Tab>
                    <Tab className='px-12 py-3 rounded-full mb-2  text-xl hover:bg-[#b4d2f5] font-bold  text-[#1a81f7]'>Secure and safe</Tab>

                </TabList>
                <TabPanel>hello</TabPanel>
                <TabPanel>nicee</TabPanel>
            </Tabs>
        </div>
    );
};

export default FuturePlan;