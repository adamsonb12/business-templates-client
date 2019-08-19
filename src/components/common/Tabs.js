import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const TabDividers = ({ tabs }) => {
    const [tabTracker, updateTabTracker] = useState(0);

    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <section
                role="tabpanel"
                hidden={tabTracker !== index}
                id={`tabpanel-${index}`}
                aria-labelledby={`tab-${index}`}
            >
                {children}
            </section>
        );
    }

    TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.any.isRequired,
        value: PropTypes.any.isRequired,
    };

    function handleChange(event, newValue) {
        updateTabTracker(newValue);
    }

    const theme = useTheme();

    return (
        <article>
            <AppBar position="static" color="default">
                <Tabs
                    value={tabTracker}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="tabs"
                >
                    {tabs
                        && tabs.map((tab, index) => (
                            <Tab
                                label={tab.title}
                                id={`tab-${index}`}
                                aria-labelledby={`tab-${index}`}
                                value={index}
                                key={`tab-${index}`}
                            />
                        ))}
                </Tabs>
            </AppBar>
            <SwipeableViews axis="x" index={tabTracker} onChangeIndex={handleChange}>
                {tabs
                    && tabs.map((tab, index) => (
                        <TabPanel
                            value={tabTracker}
                            index={index}
                            dir={theme.direction}
                            key={`tab-content-${index}`}
                        >
                            {tab.content()}
                        </TabPanel>
                    ))}
            </SwipeableViews>
        </article>
    );
};

TabDividers.propTypes = {
    tabs: PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.func.isRequired]),
    ).isRequired,
};

export default TabDividers;
