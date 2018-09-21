import React, { Component } from 'react';
import { Typography, Button, MobileStepper, GridList, GridListTile, GridListTileBar, ListSubheader, IconButton } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import InfoIcon from '@material-ui/icons/Info';
const carouselImages = [
    {
        label: 'Any description',
        imgPath: 'https://images.unsplash.com/photo-1536140040621-41f2664148b2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=acc4f4ab448d51e111dc56e8bcd8ab77&auto=format&fit=crop&w=1916&q=80'
    },
    {
        label: 'Any description',
        imgPath: 'https://images.unsplash.com/photo-1507215210622-539686c4bfaa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=234085115d4f3f1c821054b1cc4b3f93&auto=format&fit=crop&w=1350&q=80'
    },
    {
        label: 'Any description',
        imgPath: 'https://images.unsplash.com/photo-1529913906896-e17486e55c9f?ixlib=rb-0.3.5&s=c89c13e875f2ab613bd26cac89290daf&auto=format&fit=crop&w=1350&q=80'
    },
    {
        label: 'Any description',
        imgPath: 'https://images.unsplash.com/photo-1489961529042-19ec9e6da934?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7409cd95c4b386e2a7ad342173ca0ff6&auto=format&fit=crop&w=1950&q=80'
    }
]
const carouselForTrends = [
    {
        label: 'Any Description',
        imgPath: 'https://images.unsplash.com/photo-1532295454114-d7bc89024613?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=adfebfd8d6b409f4e89f33df9b0d531c&auto=format&fit=crop&w=1050&q=80',
        price: 'Rs. 35,000'
    },
    {
        label: 'Any Description',
        imgPath: 'https://images.unsplash.com/photo-1532295454114-d7bc89024613?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=adfebfd8d6b409f4e89f33df9b0d531c&auto=format&fit=crop&w=1050&q=80',
        price: 'Rs. 35,000'
    },
    {
        label: 'Any Description',
        imgPath: 'https://images.unsplash.com/photo-1532295454114-d7bc89024613?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=adfebfd8d6b409f4e89f33df9b0d531c&auto=format&fit=crop&w=1050&q=80',
        price: 'Rs. 35,000'
    },
    {
        label: 'Any Description',
        imgPath: 'https://images.unsplash.com/photo-1532295454114-d7bc89024613?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=adfebfd8d6b409f4e89f33df9b0d531c&auto=format&fit=crop&w=1050&q=80',
        price: 'Rs. 35,000'
    },
    {
        label: 'Any Description',
        imgPath: 'https://images.unsplash.com/photo-1532295454114-d7bc89024613?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=adfebfd8d6b409f4e89f33df9b0d531c&auto=format&fit=crop&w=1050&q=80',
        price: 'Rs. 35,000'
    },
    {
        label: 'Any Description',
        imgPath: 'https://images.unsplash.com/photo-1532295454114-d7bc89024613?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=adfebfd8d6b409f4e89f33df9b0d531c&auto=format&fit=crop&w=1050&q=80',
        price: 'Rs. 35,000'
    },
    {
        label: 'Any Description',
        imgPath: 'https://images.unsplash.com/photo-1532295454114-d7bc89024613?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=adfebfd8d6b409f4e89f33df9b0d531c&auto=format&fit=crop&w=1050&q=80',
        price: 'Rs. 35,000'
    }
]

const detailprices = [
    {
        label: 'Any Description',
        imgPath: 'https://images.unsplash.com/photo-1532295454114-d7bc89024613?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=adfebfd8d6b409f4e89f33df9b0d531c&auto=format&fit=crop&w=1050&q=80',
        brand: 'Any brand',
        price: 'Rs. 35,000'
    },
    {
        label: 'Any Description',
        imgPath: 'https://images.unsplash.com/photo-1532295454114-d7bc89024613?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=adfebfd8d6b409f4e89f33df9b0d531c&auto=format&fit=crop&w=1050&q=80',
        brand: 'Any brand',
        price: 'Rs. 35,000'
    },
    {
        label: 'Any Description',
        imgPath: 'https://images.unsplash.com/photo-1532295454114-d7bc89024613?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=adfebfd8d6b409f4e89f33df9b0d531c&auto=format&fit=crop&w=1050&q=80',
        brand: 'Any brand',
        price: 'Rs. 35,000'
    },
    {
        label: 'Any Description',
        imgPath: 'https://images.unsplash.com/photo-1532295454114-d7bc89024613?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=adfebfd8d6b409f4e89f33df9b0d531c&auto=format&fit=crop&w=1050&q=80',
        brand: 'Any brand',
        price: 'Rs. 35,000'
    },
    {
        label: 'Any Description',
        imgPath: 'https://images.unsplash.com/photo-1532295454114-d7bc89024613?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=adfebfd8d6b409f4e89f33df9b0d531c&auto=format&fit=crop&w=1050&q=80',
        brand: 'Any brand',
        price: 'Rs. 35,000'
    },
    {
        label: 'Any Description',
        imgPath: 'https://images.unsplash.com/photo-1532295454114-d7bc89024613?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=adfebfd8d6b409f4e89f33df9b0d531c&auto=format&fit=crop&w=1050&q=80',
        brand: 'Any brand',
        price: 'Rs. 35,000'
    }
]

const styles = theme => ({
    spacing: {
        padding: '40px 0 40px 0',
        paddingTop: '40px',
        paddingRight: '40px'
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 500,
        height: 450,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
})


class Home extends Component {
    state = {
        activeStep: 0,
    };
    handleStepChange = activeStep => {
        this.setState({ activeStep });
    };

    render() {
        const { classes, theme } = this.props;
        const { activeStep } = this.state;
        const maxSteps = carouselForTrends.length;
        debugger;
        console.log(theme)

        return (
            <div className="App">
                <section className="coursel-fullgrid">
                    <Typography variant="display2">
                        Welcome to Zen
                        </Typography>
                    <Typography variant="headline">
                        Zen is FREE online classified which enables individuals as well as companies to list wide variety of new or used product online. We at Zen believe that internet is a great promotional vechicle as well as communication channel for connecting buyers and sellers. Zen is perfect solution which helps to list your products for free.
                        </Typography>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={activeStep}
                        onChangeIndex={this.handleStepChange}
                        enableMouseEvents
                    >
                        {carouselImages.map(step => (
                            <img key={step.label} className={classes.img} src={step.imgPath} alt={step.label} />
                        ))}
                    </SwipeableViews>

                </section>
                <section className="coursel-small-fullgrid">
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={activeStep}
                        onChangeIndex={this.handleStepChange}
                        enableMouseEvents
                    >
                        {carouselForTrends.map(step => (
                            <img key={step.label} className={classes.img} src={step.imgPath} alt={step.label} />
                        ))}
                    </SwipeableViews>
                    <MobileStepper
                        steps={maxSteps}
                        position="static"
                        activeStep={activeStep}
                        className={classes.mobileStepper}
                        nextButton={
                            <Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
                                Next
                            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                            </Button>
                        }
                        backButton={
                            <Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
                                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                                Back
                            </Button>
                        }
                    />
                </section>
                <section className="gridlist-featured-products">
                    <div className={classes.root}>
                        <GridList cellHeight={180} className={classes.gridList}>
                            <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                                <ListSubheader component="div">December</ListSubheader>
                            </GridListTile>
                            {detailprices.map(tile => (
                                <GridListTile key={tile.imagePath}>
                                    <img src={tile.imagePath} alt={tile.label} />
                                    <GridListTileBar
                                        title={tile.label}
                                        subtitle={<span>price: {tile.price}</span>}
                                        brand={tile.brand}
                                        actionIcon={
                                            <IconButton className={classes.icon}>
                                                <InfoIcon />
                                            </IconButton>
                                        }
                                    />
                                </GridListTile>
                            ))}
                        </GridList>
                    </div>
                </section>
                <section className="recently-listed-products">
                    <div className={classes.root}>
                        <GridList cellHeight={180} className={classes.gridList}>
                            <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                                <ListSubheader component="div">December</ListSubheader>
                            </GridListTile>
                            {detailprices.map(tile => (
                                <GridListTile key={tile.imagePath}>
                                    <img src={tile.imagePath} alt={tile.label} />
                                    <GridListTileBar
                                        title={tile.label}
                                        subtitle={<span>price: {tile.price}</span>}
                                        brand={tile.brand}
                                        actionIcon={
                                            <IconButton className={classes.icon}>
                                                <InfoIcon />
                                            </IconButton>
                                        }
                                    />
                                </GridListTile>
                            ))}
                        </GridList>
                    </div>
                </section>
                <section className="bands-sponsers">
                        
                </section>
                <section className="footer"></section>
                {/* TODO: Put footer in layout */}
                @copyright 
            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(Home);
