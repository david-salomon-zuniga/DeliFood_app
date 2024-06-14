// Import React library
import React from 'react';
import { createRoot } from 'react-dom/client';
//export var intervals: NodeJS.Timeout[] = [];
import BarChart from "./chartsjs/socProof_BarChart";
import LineChart from "./chartsjs/socProof_lineChart";
import LineYChart from "./chartsjs/socProof_lineYChart";
import polarchart from "./chartsjs/socProof_PolarAreaChart";
import piechart from "./chartsjs/socProof_piechart";

import dataJSON from "../pages/index"

export var landingPageContentJson:LandingPageContent = {mainTitles:[], socialProofParagraphs:[], mainImages:[],featuresSectionTitles:[], featuresSectionParagraphs:[], benefitsImages:[], benefitsSectionTitles:[], benefitsSectionParagraphs:[],testimonialTitles:[],testimonialParagraphs:[],testimonialImages:[],starRatingTitles:[],starRatingParagraphs:[],starRatingImages:[],influencerTitles:[],influencerParagraphs:[],influencerImages:[],userGeneratedContentTitles:[],userGeneratedContentParagraphs: [],userGeneratedContentImages: [],mediaMentionsTitles:[],mediaMentionsParagraphs: [],mediaMentionsImages: [],statisticsTitles:[],statisticsParagraphs: [],statisticsImages: [],socialMediaTitles:[],socialMediaParagraphs: [],timeSavingTipsTitles:[],timeSavingTipsParagraphs: [],awardsTitles:[],awardsParagraphs: [],awardsImages: [],successStoriesTitles:[],successStoriesParagraphs: [],successStoriesImages: [],lctaTitles:[],lctaParagraphs:[],lctaImages:[]};

interface LandingPageContent {
  mainTitles: string[];
  socialProofParagraphs: string[];
  mainImages: string[];
  featuresSectionTitles: string[];
  featuresSectionParagraphs: string[];
  benefitsImages: string[];
  benefitsSectionTitles: string[];
  benefitsSectionParagraphs: string[];
  testimonialTitles: string[];
  testimonialParagraphs:string[];
  testimonialImages: string[];    
  starRatingTitles:string[],
  starRatingParagraphs:string[],
  starRatingImages:string[],
  influencerTitles: string[],
  influencerParagraphs: string[],
  influencerImages: string[],
  userGeneratedContentTitles:string[],
  userGeneratedContentParagraphs: string[],
  userGeneratedContentImages: string[],

  mediaMentionsTitles:string[],
  mediaMentionsParagraphs: string[],
  mediaMentionsImages: string[],
  
  statisticsTitles:string[],
  statisticsParagraphs: string[],
  statisticsImages: string[],

  socialMediaTitles:string[],
  socialMediaParagraphs: string[],
  /*socialMediaImages: string[],*/
  
  timeSavingTipsTitles:string[],
  timeSavingTipsParagraphs: string[],
  /*statisticsImages: string[],*/

  awardsTitles:string[],
  awardsParagraphs: string[],
  awardsImages: string[],
  
  successStoriesTitles:string[],
  successStoriesParagraphs: string[],
  successStoriesImages: string[],

  lctaTitles:string[],
  lctaParagraphs: string[],
  lctaImages: string[],
}


export const slideSocialProofSectionToTheLeft = () => {
  let section4 = document.getElementById("idSection4Landing");
  let leftBtn =document.getElementById("idBtnLeftSlideSocP");
  let rightBtn =document.getElementById("idBtnRightSlideSocP");
  if(section4 && leftBtn && rightBtn){
    if(section4.style.left == "" || section4.style.left == "0%"){
      section4.style.position = "relative";
      section4.style.left = "-400%";
      leftBtn.style.marginLeft = "80.3%";
      rightBtn.style.marginRight = "0.3%";
      return;
    }
    if(section4.style.left == "-400%"){
      section4.style.position = "relative";
      section4.style.left = "-300%";
      leftBtn.style.marginLeft = "60.3%";
      rightBtn.style.marginRight = "20.3%";
      return;
    }
    if(section4.style.left == "-300%"){
      section4.style.position = "relative";
      section4.style.left = "-200%";
      leftBtn.style.marginLeft = "40.3%";
      rightBtn.style.marginRight = "40.3%";
      return;
    }
    if(section4.style.left == "-200%"){
      section4.style.position = "relative";
      section4.style.left = "-100%";
      leftBtn.style.marginLeft = "20.3%";
      rightBtn.style.marginRight = "60.3%";
      return;
    }
    if(section4.style.left == "-100%"){
      section4.style.position = "relative";
      section4.style.left = "0%";
      leftBtn.style.marginLeft = "0.3%";
      rightBtn.style.marginRight = "80.3%";
      return;
    }
  }  
} // end of slideSocialProofSectionToTheLeft arrow funtion

export const slideSocialProofSectionToTheRight = () => {
  let section4 = document.getElementById("idSection4Landing");
  let leftBtn =document.getElementById("idBtnLeftSlideSocP");
  let rightBtn =document.getElementById("idBtnRightSlideSocP");
  if(section4 && leftBtn && rightBtn){
    if(section4.style.left == "" || section4.style.left == "0%"){
      section4.style.position = "relative";
      section4.style.left = "-100%";
      leftBtn.style.marginLeft = "20.3%";
      rightBtn.style.marginRight = "60.3%";
      return;
    }
    if(section4.style.left == "-100%"){
      section4.style.position = "relative";
      section4.style.left = "-200%";
      leftBtn.style.marginLeft = "40.3%";
      rightBtn.style.marginRight = "40.3%";
      return;
    }
    if(section4.style.left == "-200%"){
      section4.style.position = "relative";
      section4.style.left = "-300%";
      leftBtn.style.marginLeft = "60.3%";
      rightBtn.style.marginRight = "20.3%";
      return;
    }
    if(section4.style.left == "-300%"){
      section4.style.position = "relative";
      section4.style.left = "-400%";
      leftBtn.style.marginLeft = "80.3%";
      rightBtn.style.marginRight = "0.3%";
      return;
    }
    if(section4.style.left == "-400%"){
      section4.style.position = "relative";
      section4.style.left = "0%";
      leftBtn.style.marginLeft = "0.3%";
      rightBtn.style.marginRight = "80.3%";
      return;
    }
  }  
} // end of slideSocialProofSectionToTheRight arrow funtion

const activateButtons = (button:HTMLButtonElement, landingPageContentJson: LandingPageContent) =>{
  // Custom functionality for each button
  if (button.id === 'IdCarouselBtn') {
      // Do something specific for this button
      slideAllContent("IdMainH1","IdMainSociaProofParraf","IdMainImgBackDefault",landingPageContentJson.mainTitles,landingPageContentJson.socialProofParagraphs,landingPageContentJson.mainImages,"static/defaultMainBackImg-1a36c770d2274985d9ad52971f861f0a.jpeg");
  } else if(button.id === 'IdSliderBtnFeatures'){
      // Do something else for other buttons
      slideAllFeatures(landingPageContentJson);
  } else if(button.id === 'IdSliderBtnBenefits'){
      // Do something else for other buttons
      slideAllContent("IdBenefitsH21","IdPBenefits1","IdBenefitsImgBackDefault",landingPageContentJson.benefitsSectionTitles,landingPageContentJson.benefitsSectionParagraphs,landingPageContentJson.benefitsImages,"static/defaultBenefitsBackImg-d91f7f128dcab5b616f40da21da0279f.jpg");
  } else if(button.id === 'idBtnLeftSlideSocP'){
      // Do something else for other buttons
      console.log("Papaya Izquierda");
      slideSocialProofSectionToTheLeft();
  } else if(button.id === 'idBtnRightSlideSocP'){
      // Do something else for other buttons
      console.log("Papaya Derecha");
      slideSocialProofSectionToTheRight();
  } else if(button.id === 'IdSliderBtnSocialProof1'){
      // Do something else for other buttons
      slideAllContent("idH3Testimonials","idPTestimonials","idTestimonialsImage",landingPageContentJson.testimonialTitles,landingPageContentJson.testimonialParagraphs,landingPageContentJson.testimonialImages,"static/prof1-7588750f6aa95ac5e47b078889cfef4c.jpeg");
      slideAllContent("idH3Ratings","idPRatings","idRatingImage",landingPageContentJson.starRatingTitles,landingPageContentJson.starRatingParagraphs,landingPageContentJson.starRatingImages,"static/ranked1-705b52e0a6ee0e19a24fdf8df37c9afb.jpg");
  } else if(button.id === 'IdSliderBtnSocialProof2'){
      // Do something else for other buttons
      slideAllContent("idH3Influencers","idPInfluencers","idInfluencersImage",landingPageContentJson.influencerTitles,landingPageContentJson.influencerParagraphs,landingPageContentJson.influencerImages,"static/influencers1-aa21c8cf7af2e3fee3b6d2c864c249c8.jpg");
      slideAllContent("idH3UserGenerated","idPUserGenerated","idUserGeneratedImage",landingPageContentJson.userGeneratedContentTitles,landingPageContentJson.userGeneratedContentParagraphs,landingPageContentJson.userGeneratedContentImages,"static/profile1-196d177e7f50a5353eff687f4240d71e.jpg");
  } else if(button.id === 'IdSliderBtnSocialProof3'){
      // Do something else for other buttonsslideAllContent("idMediaMentionsH3","idMediaMentionsP","idMediaMentionsImage",plandingPageContentJson.mediaMentionsTitles,plandingPageContentJson.mediaMentionsParagraphs,plandingPageContentJson.mediaMentionsImages,`url("http://localhost:8000/static/media_mentions1-fcd4c4aa586cfc0b735e76b4e50b7a08.jpg")`);
      slideAllContent("idMediaMentionsH3","idMediaMentionsP","idMediaMentionsImage",landingPageContentJson.mediaMentionsTitles,landingPageContentJson.mediaMentionsParagraphs,landingPageContentJson.mediaMentionsImages,"static/media_mentions1-fcd4c4aa586cfc0b735e76b4e50b7a08.jpg");
      slideAllContent("idRankedH3","idRankedP", "idRankedImage",landingPageContentJson.statisticsTitles,landingPageContentJson.statisticsParagraphs,landingPageContentJson.statisticsImages,"static/ranked1-705b52e0a6ee0e19a24fdf8df37c9afb.jpg");
  } else if(button.id === 'IdSliderBtnSocialProof4'){
      // Do something else for other buttons
      slideSocialMedia(landingPageContentJson);
      slideTimeSaving(landingPageContentJson);      
  } else if(button.id === 'IdSliderBtnSocialProof5'){
      // Do something else for other buttons
      slideAllContent("idAwardsH3","idAwardsP","idAwardsImg",landingPageContentJson.awardsTitles,landingPageContentJson.awardsParagraphs,landingPageContentJson.awardsImages,"static/awards1-4a923278c3d9a5d1a69d4883914ba267.png");
      slideAllContent("idUsersSuccessStoriesH3","idUsersSuccessStoriesP","idUsersSuccessStoriesImg",landingPageContentJson.successStoriesTitles,landingPageContentJson.successStoriesParagraphs,landingPageContentJson.successStoriesImages,"static/randomperson1-b1fb7413a51e9f0639b1858eabf0c6bd.jpg");  
  } else if(button.id === 'idBtnSliderSectionLCTA'){
      // Do something else for other buttons
      slideAllContent("idH3LCTA","idPLCTA","idBackImgLCTA",landingPageContentJson.lctaTitles,landingPageContentJson.lctaParagraphs,landingPageContentJson.lctaImages,"static/lcta1-edc02c762bc530f05df37dd50428a42a.jpeg");
  } else if(button.id == "IdCallToActionBtn1"){
    window.location.href = `${window.location.href}`+`register`;
  }
  
} // end of activateButtons

// Function to press all buttons and start their jobs
function pressAllButtons(plandingPageContentJson: LandingPageContent) {
  // Example of pressing buttons (you can replace with your actual logic)
  const buttons = document.querySelectorAll('button');
  //console.log(buttons);
  buttons.forEach(button => {
      //button.click();
      //button.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
      button.addEventListener('click', ()=> activateButtons(button,plandingPageContentJson));
      //console.log(`Button with id ${button.id} clicked`);
  });

  // Add more button pressing logic as needed
}

export const slideTimeSaving = (plandingPageContentJson?:LandingPageContent) => {
  // get the h1 and p elements
  let h1 = document.getElementById("idTimeSavingH3");
  let p1 = document.getElementById("idTimeSavingP");

        // normalizing the matched strings
  let normalizedH21,normalizedH21JSONResponsePos0,normalizedH21JSONResponseLastPos,normalizedH21JSONResponseLastElemPos;
  let normalizedP1,normalizedP1JSONResponsePos0,normalizedP1JSONResponseLastPos,normalizedP1JSONResponseLastElemPos;

  if(plandingPageContentJson != undefined){
    if (h1 && p1) {
      //change h1
      for(let i=0;i<=plandingPageContentJson.timeSavingTipsTitles.length; i++){
        if(i>0){
          if(h1.textContent != null){
            normalizedH21 = normalizeWhitespace(h1.textContent); 
            normalizedH21JSONResponsePos0 = normalizeWhitespace(plandingPageContentJson.timeSavingTipsTitles[0]);
          }
          if(i == 1 && normalizedH21 == normalizedH21JSONResponsePos0){
            h1.innerHTML = plandingPageContentJson.timeSavingTipsTitles[i];
            break;
          }else if(i >1 && i < plandingPageContentJson.timeSavingTipsTitles.length){
            normalizedH21JSONResponseLastPos = normalizeWhitespace(plandingPageContentJson.timeSavingTipsTitles[i-1]);
            if(normalizedH21 == normalizedH21JSONResponseLastPos){
              h1.innerHTML = plandingPageContentJson.timeSavingTipsTitles[i];
              break;
            }
          }else{
            normalizedH21JSONResponseLastElemPos = normalizeWhitespace(plandingPageContentJson.timeSavingTipsTitles[plandingPageContentJson.timeSavingTipsTitles.length-1]);
            if(normalizedH21 == normalizedH21JSONResponseLastElemPos){
              h1.innerHTML = plandingPageContentJson.timeSavingTipsTitles[0];
              break;
            }
          }
        }
      }
      //change p1
      for(let i=0;i<=plandingPageContentJson.timeSavingTipsParagraphs.length; i++){
        if(i>0){
          if(p1.textContent != null){
            normalizedP1 = normalizeWhitespace(p1.textContent); 
            normalizedP1JSONResponsePos0 = normalizeWhitespace(plandingPageContentJson.timeSavingTipsParagraphs[0]);
          }
          if(i == 1 && normalizedP1 == normalizedP1JSONResponsePos0){
            p1.innerHTML = plandingPageContentJson.timeSavingTipsParagraphs[i];
            break;
          }else if(i >1 && i < plandingPageContentJson.timeSavingTipsParagraphs.length){
            normalizedP1JSONResponseLastPos = normalizeWhitespace(plandingPageContentJson.timeSavingTipsParagraphs[i-1]);
            if(normalizedP1 == normalizedP1JSONResponseLastPos){
              p1.innerHTML = plandingPageContentJson.timeSavingTipsParagraphs[i];
              break;
            }
          }else{
            normalizedP1JSONResponseLastElemPos = normalizeWhitespace(plandingPageContentJson.timeSavingTipsParagraphs[plandingPageContentJson.timeSavingTipsParagraphs.length-1]);
            if(normalizedP1 == normalizedP1JSONResponseLastElemPos){
              p1.innerHTML = plandingPageContentJson.timeSavingTipsParagraphs[0];
              break;
            }
          }
        }
      }
    }
  }
} // end of arrow function slideTimeSaving

export const slideSocialMedia = (plandingPageContentJson?:LandingPageContent) => {
  let h1 = document.getElementById("idSocialMediaH3");
  let p1 = document.getElementById("idSocialMediaP");

        // normalizing the matched strings
  let normalizedH21,normalizedH21JSONResponsePos0,normalizedH21JSONResponseLastPos,normalizedH21JSONResponseLastElemPos;
  let normalizedP1,normalizedP1JSONResponsePos0,normalizedP1JSONResponseLastPos,normalizedP1JSONResponseLastElemPos;

  if(plandingPageContentJson != undefined){
    if (h1 && p1) {
      //change h1
      for(let i=0;i<=plandingPageContentJson.socialMediaTitles.length; i++){
        if(i>0){
          if(h1.textContent != null){
            normalizedH21 = normalizeWhitespace(h1.textContent); 
            normalizedH21JSONResponsePos0 = normalizeWhitespace(plandingPageContentJson.socialMediaTitles[0]);
          }
          if(i == 1 && normalizedH21 == normalizedH21JSONResponsePos0){
            h1.innerHTML = plandingPageContentJson.socialMediaTitles[i];
            break;
          }else if(i >1 && i < plandingPageContentJson.socialMediaTitles.length){
            normalizedH21JSONResponseLastPos = normalizeWhitespace(plandingPageContentJson.socialMediaTitles[i-1]);
            if(normalizedH21 == normalizedH21JSONResponseLastPos){
              h1.innerHTML = plandingPageContentJson.socialMediaTitles[i];
              break;
            }
          }else{
            normalizedH21JSONResponseLastElemPos = normalizeWhitespace(plandingPageContentJson.socialMediaTitles[plandingPageContentJson.socialMediaTitles.length-1]);
            if(normalizedH21 == normalizedH21JSONResponseLastElemPos){
              h1.innerHTML = plandingPageContentJson.socialMediaTitles[0];
              break;
            }
          }
        }
      }
      //change p1
      for(let i=0;i<=plandingPageContentJson.socialMediaParagraphs.length; i++){
        if(i>0){
          if(p1.textContent != null){
            normalizedP1 = normalizeWhitespace(p1.textContent); 
            normalizedP1JSONResponsePos0 = normalizeWhitespace(plandingPageContentJson.socialMediaParagraphs[0]);
          }
          if(i == 1 && normalizedP1 == normalizedP1JSONResponsePos0){
            p1.innerHTML = plandingPageContentJson.socialMediaParagraphs[i];
            break;
          }else if(i >1 && i < plandingPageContentJson.socialMediaParagraphs.length){
            normalizedP1JSONResponseLastPos = normalizeWhitespace(plandingPageContentJson.socialMediaParagraphs[i-1]);
            if(normalizedP1 == normalizedP1JSONResponseLastPos){
              p1.innerHTML = plandingPageContentJson.socialMediaParagraphs[i];
              break;
            }
          }else{
            normalizedP1JSONResponseLastElemPos = normalizeWhitespace(plandingPageContentJson.socialMediaParagraphs[plandingPageContentJson.socialMediaParagraphs.length-1]);
            if(normalizedP1 == normalizedP1JSONResponseLastElemPos){
              p1.innerHTML = plandingPageContentJson.socialMediaParagraphs[0];
              break;
            }
          }
        }
      }
    }

  }
} // end of arrow function slideSocialMedia

const slideAllSocialProof = (plandingPageContentJson:LandingPageContent) => {
  slideAllContent("idH3Testimonials","idPTestimonials","idTestimonialsImage",plandingPageContentJson.testimonialTitles,plandingPageContentJson.testimonialParagraphs,plandingPageContentJson.testimonialImages,"static/prof1-7588750f6aa95ac5e47b078889cfef4c.jpeg");
  slideAllContent("idH3Ratings","idPRatings","idRatingImage",plandingPageContentJson.starRatingTitles,plandingPageContentJson.starRatingParagraphs,plandingPageContentJson.starRatingImages,"static/ranked1-705b52e0a6ee0e19a24fdf8df37c9afb.jpg");
  slideAllContent("idH3Influencers","idPInfluencers","idInfluencersImage",plandingPageContentJson.influencerTitles,plandingPageContentJson.influencerParagraphs,plandingPageContentJson.influencerImages,"static/influencers1-aa21c8cf7af2e3fee3b6d2c864c249c8.jpg");
  slideAllContent("idH3UserGenerated","idPUserGenerated","idUserGeneratedImage",plandingPageContentJson.userGeneratedContentTitles,plandingPageContentJson.userGeneratedContentParagraphs,plandingPageContentJson.userGeneratedContentImages,"static/profile1-196d177e7f50a5353eff687f4240d71e.jpg");
  slideAllContent("idMediaMentionsH3","idMediaMentionsP","idMediaMentionsImage",plandingPageContentJson.mediaMentionsTitles,plandingPageContentJson.mediaMentionsParagraphs,plandingPageContentJson.mediaMentionsImages,"static/media_mentions1-fcd4c4aa586cfc0b735e76b4e50b7a08.jpg");
  slideAllContent("idRankedH3","idRankedP", "idRankedImage",plandingPageContentJson.statisticsTitles,plandingPageContentJson.statisticsParagraphs,plandingPageContentJson.statisticsImages,"static/ranked1-705b52e0a6ee0e19a24fdf8df37c9afb.jpg");
  slideSocialMedia(plandingPageContentJson);
  slideTimeSaving(plandingPageContentJson);
  slideAllContent("idAwardsH3","idAwardsP","idAwardsImg",plandingPageContentJson.awardsTitles,plandingPageContentJson.awardsParagraphs,plandingPageContentJson.awardsImages,"static/awards1-4a923278c3d9a5d1a69d4883914ba267.png");
  slideAllContent("idUsersSuccessStoriesH3","idUsersSuccessStoriesP","idUsersSuccessStoriesImg",plandingPageContentJson.successStoriesTitles,plandingPageContentJson.successStoriesParagraphs,plandingPageContentJson.successStoriesImages,"static/randomperson1-b1fb7413a51e9f0639b1858eabf0c6bd.jpg");
} // end of arrow function slideAllSocialProof


function normalizeWhitespace(str:string) {
  return str.replace(/\s+/g, '').trim();
}

export const slideAllFeatures = (plandingPageContentJson?:LandingPageContent) =>{
  
  // First get the h1 and ps object with it's id
  const h21 = document.getElementById("IdFeaturesH21");
  const p1 = document.getElementById("IdPFeatures1");
  const h22 = document.getElementById("IdFeaturesH22");
  const p2 = document.getElementById("IdPFeatures2");

  let normalizedH21,normalizedH21JSONResponsePos0,normalizedH21JSONResponseLastPos,normalizedH21JSONResponseLastElemPos;
  let normalizedP1,normalizedP1JSONResponsePos0,normalizedP1JSONResponseLastPos,normalizedP1JSONResponseLastElemPos;
  let normalizedH22,normalizedH22JSONResponsePos0,normalizedH22JSONResponseLastPos,normalizedH22JSONResponseLastElemPos;
  let normalizedP2,normalizedP2JSONResponsePos0,normalizedP2JSONResponseLastPos,normalizedP2JSONResponseLastElemPos;

  if(plandingPageContentJson != undefined){
    
    if (h21 && p1 && h22 && p2) {

      //change h21g
      for(let i=0;i<=plandingPageContentJson.featuresSectionTitles.length; i+=2){
        if(i>0){
          if(h21.textContent != null){
            normalizedH21 = normalizeWhitespace(h21.textContent); 
            normalizedH21JSONResponsePos0 = normalizeWhitespace(plandingPageContentJson.featuresSectionTitles[0]);
          }
          if(i == 2 && normalizedH21 == normalizedH21JSONResponsePos0){
            h21.innerHTML = plandingPageContentJson.featuresSectionTitles[i];
            break;
          }else if(i >2 && i < plandingPageContentJson.featuresSectionTitles.length){
            normalizedH21JSONResponseLastPos = normalizeWhitespace(plandingPageContentJson.featuresSectionTitles[i-2]);
            if(normalizedH21 == normalizedH21JSONResponseLastPos){
              h21.innerHTML = plandingPageContentJson.featuresSectionTitles[i];
              break;
            }
          }else{
            normalizedH21JSONResponseLastElemPos = normalizeWhitespace(plandingPageContentJson.featuresSectionTitles[plandingPageContentJson.featuresSectionTitles.length-2]);
            if(normalizedH21 == normalizedH21JSONResponseLastElemPos){
              h21.innerHTML = plandingPageContentJson.featuresSectionTitles[0];
              break;
            }
          }
        }
      }
      //change p1
      for(let i=0;i<=plandingPageContentJson.featuresSectionParagraphs.length; i+=2){
        if(i>0){
          if(p1.textContent != null){
            normalizedP1 = normalizeWhitespace(p1.textContent); 
            normalizedP1JSONResponsePos0 = normalizeWhitespace(plandingPageContentJson.featuresSectionParagraphs[0]);
          }
          if(i == 2 && normalizedP1 == normalizedP1JSONResponsePos0){
            p1.innerHTML = plandingPageContentJson.featuresSectionParagraphs[i];
            break;
          }else if(i >2 && i < plandingPageContentJson.featuresSectionParagraphs.length){
            normalizedP1JSONResponseLastPos = normalizeWhitespace(plandingPageContentJson.featuresSectionParagraphs[i-2]);
            if(normalizedP1 == normalizedP1JSONResponseLastPos){
              p1.innerHTML = plandingPageContentJson.featuresSectionParagraphs[i];
              break;
            }
          }else{
            normalizedP1JSONResponseLastElemPos = normalizeWhitespace(plandingPageContentJson.featuresSectionParagraphs[plandingPageContentJson.featuresSectionParagraphs.length-2]);
            if(normalizedP1 == normalizedP1JSONResponseLastElemPos){
              p1.innerHTML = plandingPageContentJson.featuresSectionParagraphs[0];
              break;
            }
          }
        }
      }
      //change h22
      for(let i=1;i<=plandingPageContentJson.featuresSectionTitles.length; i+=2){
        if(i>0){
          if(h22.textContent != null){
            normalizedH22 = normalizeWhitespace(h22.textContent); 
            normalizedH22JSONResponsePos0 = normalizeWhitespace(plandingPageContentJson.featuresSectionTitles[1]);
          }
          if(i == 3 && normalizedH22 == normalizedH22JSONResponsePos0){
            h22.innerHTML = plandingPageContentJson.featuresSectionTitles[i];
            break;
          }else if(i >3 && i < plandingPageContentJson.featuresSectionTitles.length){
            normalizedH22JSONResponseLastPos = normalizeWhitespace(plandingPageContentJson.featuresSectionTitles[i-2]);
            if(normalizedH22 == normalizedH22JSONResponseLastPos){
              h22.innerHTML = plandingPageContentJson.featuresSectionTitles[i];
              break;
            }
          }else{
            normalizedH22JSONResponseLastElemPos = normalizeWhitespace(plandingPageContentJson.featuresSectionTitles[plandingPageContentJson.featuresSectionTitles.length-1]);
            if(normalizedH22 == normalizedH22JSONResponseLastElemPos){
              h22.innerHTML = plandingPageContentJson.featuresSectionTitles[1];
              break;
            }
          }
        }
      }
      //change p2
      for(let i=1;i<=plandingPageContentJson.featuresSectionParagraphs.length; i+=2){
        if(i>0){
          if(p2.textContent != null){
            normalizedP2 = normalizeWhitespace(p2.textContent); 
            normalizedP2JSONResponsePos0 = normalizeWhitespace(plandingPageContentJson.featuresSectionParagraphs[1]);
          }
          if(i == 3 && normalizedP2 == normalizedP2JSONResponsePos0){
            p2.innerHTML = plandingPageContentJson.featuresSectionParagraphs[i];
            break;
          }else if(i >3 && i < plandingPageContentJson.featuresSectionParagraphs.length){
            normalizedP2JSONResponseLastPos = normalizeWhitespace(plandingPageContentJson.featuresSectionParagraphs[i-2]);
            if(normalizedP2 == normalizedP2JSONResponseLastPos){
              p2.innerHTML = plandingPageContentJson.featuresSectionParagraphs[i];
              break;
            }
          }else{
            normalizedP2JSONResponseLastElemPos = normalizeWhitespace(plandingPageContentJson.featuresSectionParagraphs[plandingPageContentJson.featuresSectionParagraphs.length-1]);
            if(normalizedP2 == normalizedP2JSONResponseLastElemPos){
              p2.innerHTML = plandingPageContentJson.featuresSectionParagraphs[1];
              break;
            }
          }
        }
      }
    }
  }
  
} // end of slideAllFeatures arrow function


export const slideAllContent = (pidH3: string, pidP: string, pidImg: string, titleRay: string[], paragraphsRay: string[], imgsRay: string[], pdefaultImg: string) => {
  // get the h1 and p elements
  let h1 = document.getElementById(pidH3);
  let p1 = document.getElementById(pidP);

        // normalizing the matched strings
  let normalizedH21,normalizedH21JSONResponsePos0,normalizedH21JSONResponseLastPos,normalizedH21JSONResponseLastElemPos;
  let normalizedP1,normalizedP1JSONResponsePos0,normalizedP1JSONResponseLastPos,normalizedP1JSONResponseLastElemPos;

  if(titleRay != undefined){
    if (h1 && p1) {
      //change h1
      for(let i=0;i<=titleRay.length; i++){
        if(i>0){
          if(h1.textContent != null){
            normalizedH21 = normalizeWhitespace(h1.textContent); 
            normalizedH21JSONResponsePos0 = normalizeWhitespace(titleRay[0]);
          }
          if(i == 1 && normalizedH21 == normalizedH21JSONResponsePos0){
            h1.innerHTML = titleRay[i];
            break;
          }else if(i >1 && i < titleRay.length){
            normalizedH21JSONResponseLastPos = normalizeWhitespace(titleRay[i-1]);
            if(normalizedH21 == normalizedH21JSONResponseLastPos){
              h1.innerHTML = titleRay[i];
              break;
            }
          }else{
            normalizedH21JSONResponseLastElemPos = normalizeWhitespace(titleRay[titleRay.length-1]);
            if(normalizedH21 == normalizedH21JSONResponseLastElemPos){
              h1.innerHTML = titleRay[0];
              break;
            }
          }
        }
      }
      //change p1
      for(let i=0;i<=paragraphsRay.length; i++){
        if(i>0){
          if(p1.textContent != null){
            normalizedP1 = normalizeWhitespace(p1.textContent); 
            normalizedP1JSONResponsePos0 = normalizeWhitespace(paragraphsRay[0]);
          }
          if(i == 1 && normalizedP1 == normalizedP1JSONResponsePos0){
            p1.innerHTML = paragraphsRay[i];
            break;
          }else if(i >1 && i < paragraphsRay.length){
            normalizedP1JSONResponseLastPos = normalizeWhitespace(paragraphsRay[i-1]);
            if(normalizedP1 == normalizedP1JSONResponseLastPos){
              p1.innerHTML = paragraphsRay[i];
              break;
            }
          }else{
            normalizedP1JSONResponseLastElemPos = normalizeWhitespace(paragraphsRay[paragraphsRay.length-1]);
            if(normalizedP1 == normalizedP1JSONResponseLastElemPos){
              p1.innerHTML = paragraphsRay[0];
              break;
            }
          }
        }
      }
    }

    // First get the div object with it's id
    const mainImgBackDiv = document.getElementById(pidImg);
  
    if (mainImgBackDiv) {
  
      // second get the url of that div backgrounImage property
      var backgroundImage = window.getComputedStyle(mainImgBackDiv).backgroundImage;
      pdefaultImg = `url("${window.location.href}` + `${pdefaultImg}")`;
      // third go through a cycle and find out if url matches element to find the actual counter number of img element
      // next on stage
      for(let i=0;i<=imgsRay.length; i++){
        if(i>0){
          if(i == 1){
            if(backgroundImage == pdefaultImg){
              //console.log(backgroundImage);
              //console.log(pdefaultImg);
              mainImgBackDiv.style.backgroundImage = `url("")`;
              mainImgBackDiv.style.backgroundImage = `url("${imgsRay[i]}")`;
              break;
            }
            if(backgroundImage == `url("${imgsRay[i-1]}")`){
              mainImgBackDiv.style.backgroundImage = `url("")`;
              mainImgBackDiv.style.backgroundImage = `url("${imgsRay[i]}")`;
              break;
            }
          }else if(i >1 && i < imgsRay.length){
            if(backgroundImage ==`url("${imgsRay[i-1]}")`){
              mainImgBackDiv.style.backgroundImage = `url("")`;
              mainImgBackDiv.style.backgroundImage = `url("${imgsRay[i]}")`;
              break;
            }
          }else{
            if(backgroundImage == `url("${imgsRay[i-1]}")`){
              mainImgBackDiv.style.backgroundImage = `url("")`;
              mainImgBackDiv.style.backgroundImage = pdefaultImg;
              break;
            }
          }
        }
      }
    }
  }
} // end of arrow function slideAllContent


const activateInterval = (plandingPageContentJson: LandingPageContent) => {
  
  // Example of setting up intervals (you can replace with your actual logic)
  //if(plandingPageContentJson != null){
    //createDomElements(plandingPageContentJson);
    const interval1 = setInterval(async () => {

      slideAllContent("IdMainH1","IdMainSociaProofParraf","IdMainImgBackDefault",plandingPageContentJson.mainTitles,plandingPageContentJson.socialProofParagraphs,plandingPageContentJson.mainImages,"static/defaultMainBackImg-1a36c770d2274985d9ad52971f861f0a.jpeg");
      slideAllFeatures(plandingPageContentJson);
      slideAllContent("IdBenefitsH21","IdPBenefits1","IdBenefitsImgBackDefault",plandingPageContentJson.benefitsSectionTitles,plandingPageContentJson.benefitsSectionParagraphs,plandingPageContentJson.benefitsImages,"static/defaultBenefitsBackImg-d91f7f128dcab5b616f40da21da0279f.jpg");
      slideAllSocialProof(plandingPageContentJson);
      slideAllContent("idH3LCTA","idPLCTA","idBackImgLCTA",plandingPageContentJson.lctaTitles,plandingPageContentJson.lctaParagraphs,plandingPageContentJson.lctaImages,"static/lcta1-edc02c762bc530f05df37dd50428a42a.jpeg")
    }, 5000);

    //intervals.push(interval1);
  //}

  //landingPageContentJson = plandingPageContentJson;

} // end of function activateIntervals

const getAllTypesOfImages = async(purl: string) => {

  const uniqueImageURLs: string[] = [];

  return fetch(purl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((mainImageKeys: string[]) => {
      const fetchPromises = mainImageKeys.map(key =>
        fetch(`http://localhost:3000/image?key=${encodeURIComponent(key)}`)
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            //console.log(response);
            return response.blob();
          })
          .then(blob => {
            const url = URL.createObjectURL(blob);
            // Check if the URL is already in the array
            if (!uniqueImageURLs.includes(url)) {
              uniqueImageURLs.push(url);
            }
          })
          .catch(error => console.error('Error fetching image:', error))
      );

      return Promise.all(fetchPromises);
    })
    .then(() => {
      return uniqueImageURLs;
    })
    .catch(error => console.error('Error fetching main image keys:', error));

} // end of function getAllTypesOfImages
  
 export const getLandingPageAllContent = (plandingPageContentJson: LandingPageContent): Promise<LandingPageContent> => {
    const textDataPromise = getMainContent();
  
    const imageUrls = [
        'http://localhost:3000/main-images', 
        'http://localhost:3000/benefits-images',
        'http://localhost:3000/socialProofImgs-Testimonials',
        'http://localhost:3000/socialProofImgs-Ratings',
        'http://localhost:3000/socialProofImgs-Influencers',
        'http://localhost:3000/socialProofImgs-userGeneratedContent',
        'http://localhost:3000/socialProofImgs-mediaMentions',
        'http://localhost:3000/socialProofImgs-ranked',
        'http://localhost:3000/socialProofImgs-awards',
        'http://localhost:3000/socialProofImgs-usersSuccessStories',
        'http://localhost:3000/lcta-images'
      ];
  
    const imagePromises = imageUrls.map(url => getAllTypesOfImages(url));
  
    return Promise.all([textDataPromise, ...imagePromises])
      .then(([textDataJSON, ...imageDataJSON]) => {
        plandingPageContentJson = {
          ...plandingPageContentJson,
          mainTitles: textDataJSON.mainTitles,
          socialProofParagraphs: textDataJSON.socialProofParagraphs,
          mainImages: imageDataJSON[0] || [],
          featuresSectionTitles: textDataJSON.featuresSectionTitles,
          featuresSectionParagraphs: textDataJSON.featuresSectionParagraphs,
          benefitsImages: imageDataJSON[1] || [],
          benefitsSectionTitles: textDataJSON.benefitsSectionTitles,
          benefitsSectionParagraphs: textDataJSON.benefitsSectionParagraphs,
          testimonialTitles: textDataJSON.testimonialTitles,
          testimonialParagraphs: textDataJSON.testimonialParagraphs,
          testimonialImages: imageDataJSON[2] || [],
          starRatingTitles: textDataJSON.starRatingTitles,
          starRatingParagraphs: textDataJSON.starRatingParagraphs,
          starRatingImages: imageDataJSON[3] || [],
          influencerTitles: textDataJSON.influencerTitles,
          influencerParagraphs: textDataJSON.influencerParagraphs,
          influencerImages: imageDataJSON[4] || [],
          userGeneratedContentTitles: textDataJSON.userGeneratedContentTitles,
          userGeneratedContentParagraphs: textDataJSON.userGeneratedContentParagraphs,
          userGeneratedContentImages: imageDataJSON[5] || [],
          mediaMentionsTitles: textDataJSON.mediaMentionsTitles,
          mediaMentionsParagraphs: textDataJSON.mediaMentionsParagraphs,
          mediaMentionsImages: imageDataJSON[6] || [],
          statisticsTitles: textDataJSON.statisticsTitles,
          statisticsParagraphs: textDataJSON.statisticsParagraphs,
          statisticsImages: imageDataJSON[7] || [],
          socialMediaTitles: textDataJSON.socialMediaTitles,
          socialMediaParagraphs: textDataJSON.socialMediaParagraphs,
          timeSavingTipsTitles: textDataJSON.timeSavingTipsTitles,
          timeSavingTipsParagraphs: textDataJSON.timeSavingTipsParagraphs,
          awardsTitles: textDataJSON.awardsTitles,
          awardsParagraphs: textDataJSON.awardsParagraphs,
          awardsImages: imageDataJSON[8] || [],
          successStoriesTitles: textDataJSON.successStoriesTitles,
          successStoriesParagraphs: textDataJSON.successStoriesParagraphs,
          successStoriesImages: imageDataJSON[9] || [],
          lctaTitles: textDataJSON.lctaTitles,
          lctaParagraphs: textDataJSON.lctaParagraphs,
          lctaImages: imageDataJSON[10] || [],
        };
  
        return plandingPageContentJson;
      })
      .catch(error => {
        console.error('Error fetching landing page content:', error);
        return plandingPageContentJson; // return the original content in case of an error
      });
  };
  

  const getMainContent = () => {

    return fetch('http://localhost:3000/main-content')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        return response.json();
      })
        .catch(error => {
        console.error('Error fetching main content:', error);
        throw error; // Re-throw the error to terminate the promise chain
      });
  };

  export const fetchData = () => {
    getLandingPageAllContent(landingPageContentJson)
      .then(data => {
        
        if(data){
          activateInterval(data);
          
          console.log(data);

          // Set a timeout to delay the execution of the functions by 8000 milliseconds (8 seconds)
          const timeoutId = setTimeout(() => {
            pressAllButtons(data); // Put click event on all the buttons
          }, 6000);
          
          // Cleanup function to clear the timeout if the component unmounts
          return () => {
            clearTimeout(timeoutId);
          };
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };
  








const addGeneralContainer = (pPage:string,pSec:HTMLElement)=>{
  // get main
  let m = document.getElementById("idMain");
  let d = document.createElement('div');
  d.classList.add('divGeneral');

  switch(pPage){
    case "landingPageMain":
      d.classList.add('cyanLinearGradientBackground');
      break;
    case "landingPageFeatures":
      d.classList.add('pinkLinearGradientBack');
      break;
    case "landingPageBenefits":
      d.classList.add('blueLinearGradientBack');
      d.classList.add('centerAdjustmentForlongitudinalDiv');
      break;
    case "landingPageSocialProof":
      d.classList.add('purpleOrangeGradientBack');
      if(document.getElementById('idBtnLeftSlideSocP') == null){
        
        let carouselDiv= document.createElement('div');
        carouselDiv.classList.add('generalSliderForRandomSection');
  
        let btn1 = document.createElement('button');
        btn1.setAttribute('type','button');
        btn1.id = "idBtnLeftSlideSocP";
        btn1.classList.add("carouselBtn1");
        btn1.innerHTML = "‹";
        carouselDiv.appendChild(btn1);
  
        let btn2 = document.createElement('button');
        btn2.setAttribute('type','button');
        btn2.id = "idBtnRightSlideSocP";
        btn2.classList.add("carouselBtn2");
        btn2.innerHTML = "›";
        carouselDiv.appendChild(btn2);
        d.appendChild(carouselDiv);
        //d.classList.add('centerAdjustmentForlongitudinalDiv');
      }
      break;
    case "landingPageLCTA":
      d.classList.add('tealGreenGradientBack');
      d.classList.add('adjustLCTADivGeneral');
      break;
    default:
      break;
  }


  if(m){
    pSec.appendChild(d);
    m.appendChild(pSec);
  }

} // end of function addGeneralContainer

const addTransversalDiv = (pSec:string, pDivGeneralName:string)=>{
  let generalDivRay = document.getElementsByClassName("divGeneral");
  let centeredLongitudinalDivRay = document.getElementsByClassName("longitudinalDiv");
  let transveralDivRay = document.getElementsByClassName("transversalDiv");
  let d1 = document.createElement('div');

  switch(pSec){
    case "landingPageMain":
      
          if(pDivGeneralName == "toLongitudinal"){
            d1.classList.add('transversalDiv');
            d1.classList.add('adjustTransversalToCenteredLongitudinalDiv');
            centeredLongitudinalDivRay[0].appendChild(d1);
          }else if(pDivGeneralName == ""){
            d1.classList.add('transversalDiv');
            generalDivRay[0].appendChild(d1);
          } 
         
      break;
    case "landingPageFeatures":
      
          if(pDivGeneralName=="toTransversal1"){
            d1.classList.add('transversalDiv');
            d1.classList.add('adjustTransversalToCenteredTransversalDiv');
            d1.classList.add('squares');
            d1.classList.add('blueGradientForSquares');
            transveralDivRay[2].appendChild(d1);
          }else if(pDivGeneralName=="toTransversal2"){
            d1.classList.add('transversalDiv');
            d1.classList.add('adjustTransversalToCenteredTransversalDiv');
            d1.classList.add('squares');
            d1.classList.add('blueGradientForSquares');
            d1.classList.add('addALittleMarginTop');
            transveralDivRay[4].appendChild(d1);
          }else if(pDivGeneralName==""){
            d1.classList.add('transversalDiv');
            generalDivRay[1].appendChild(d1);
          }


          
      break;
    case "landingPageBenefits":

          //d1.classList.add('transversalDiv');
          //generalDivRay[0].appendChild(d1);

      break;
    case "landingPageSocialProof":
        switch(pDivGeneralName){
          case "divGeneral1":
            let d1 = document.createElement('div');
            d1.classList.add('transversalDiv');
            generalDivRay[3].appendChild(d1);
            break;
          case "divGeneral2":
            //let d2 = document.createElement('div');
            //d2.classList.add('transversalDiv');
            //generalDivRay[4].appendChild(d2);
            break;
          case "divGeneral3":
            let d3 = document.createElement('div');
            d3.classList.add('transversalDiv');
            generalDivRay[5].appendChild(d3);
            break;
          case "divGeneral4":
            //let d4 = document.createElement('div');
            //d4.classList.add('transversalDiv');
            //generalDivRay[6].appendChild(d4);
            //break;
          case "divGeneral5":
            let d5 = document.createElement('div');
            d5.classList.add('transversalDiv');
            generalDivRay[7].appendChild(d5);
            break;
        
      
          default:
            break;
        }
      break;
    case "landingPageLCTA":

      if(pDivGeneralName == "toLongitudinal"){
        d1.classList.add('transversalDiv');
        d1.classList.add('adjustTransversalToCenteredLongitudinalDiv');
        centeredLongitudinalDivRay[6].appendChild(d1);
      }else if(pDivGeneralName == ""){
        d1.classList.add('transversalDiv');
        generalDivRay[8].appendChild(d1);
      } 

      break;
    default:

      break;
  }






} // end of function addTransversalDiv



const addLongitudinalDiv = (pSec:string, pDivGeneralName:string)=>{
  let generalDivRay = document.getElementsByClassName("divGeneral");
  let d1 = document.createElement('div');

  switch(pSec){
    case "landingPageMain":
      
          d1.classList.add('longitudinalDiv');
          d1.classList.add('centerTheLongitudinalDiv');
          d1.classList.add('wineLinearGradientBack');
          generalDivRay[0].appendChild(d1);
         
      break;
    case "landingPageFeatures":
      
          d1.classList.add('longitudinalDiv');
          generalDivRay[0].appendChild(d1);
          
      break;
    case "landingPageBenefits":

          d1.classList.add('longitudinalDiv');
          d1.classList.add('adjustLongitudinalWidth');
          d1.classList.add('adjustLongitudinalHeight');
          generalDivRay[2].appendChild(d1);

      break;
    case "landingPageSocialProof":
        switch(pDivGeneralName){
          case "divGeneral1":
            //let d1 = document.createElement('div');
            //d1.classList.add('longitudinalDiv');
            //generalDivRay[0].appendChild(d1);
            break;
          case "divGeneral2":
            let d2 = document.createElement('div');
            d2.classList.add('longitudinalDiv');
            generalDivRay[4].appendChild(d2);
            break;
          case "divGeneral3":
            //let d3 = document.createElement('div');
            //d3.classList.add('longitudinalDiv');
            //generalDivRay[2].appendChild(d3);
            break;
          case "divGeneral4":
            let d4 = document.createElement('div');
            d4.classList.add('longitudinalDiv');
            generalDivRay[6].appendChild(d4);
            break;
          case "divGeneral5":
            //let d5 = document.createElement('div');
            //d5.classList.add('longitudinalDiv');
            //generalDivRay[4].appendChild(d5);
            break;
        
      
          default:
            break;
        }
      break;
    case "landingPageLCTA":

          d1.classList.add('longitudinalDiv');
          d1.classList.add('centerTheLongitudinalDiv');
          d1.classList.add('centerAdjustmentForlongitudinalDiv');
          d1.classList.add('spaceGradientBack');
          generalDivRay[8].appendChild(d1);

      break;
    default:

      break;
  }



} // end of function addLongitudinalDiv

const addDivRoundImg = (pPage:string,pSecName:string, pGeneraDivName:string, pTransversalOrLogitudinalType: string, pTransversalOrLongitudinalElem: string) =>{

  let r= document.getElementsByClassName(pTransversalOrLogitudinalType);
  let long= document.getElementsByClassName(pTransversalOrLogitudinalType);


  switch(pPage){
    case "landingPage":
      switch(pSecName){
        case "section1":
          break;
        case "section2":
          break;
        case "section3":
          break;
        case "section4":
          switch(pGeneraDivName){
            case "divGeneral1":
                if(pTransversalOrLongitudinalElem == "transversalDiv1"){
                  let d = document.createElement('div');
                  d.classList.add('containerOfRoundImg');
                  let dImg = document.createElement('div');
                  dImg.classList.add('divRoundImg');
                  dImg.classList.add('imgsOnDivs');
                  d.appendChild(dImg);
                  r[6].appendChild(d);
                }else if(pTransversalOrLongitudinalElem == "transversalDiv2"){

                }
              break;
            case "divGeneral2":
              if(pTransversalOrLongitudinalElem == "longitudinalDiv1"){

              }else if(pTransversalOrLongitudinalElem == "longitudinalDiv2"){

              }
              break;
            case "divGeneral3":
              if(pTransversalOrLongitudinalElem == "transversalDiv1"){

              }else if(pTransversalOrLongitudinalElem == "transversalDiv2"){

              }
              break;
            case "divGeneral4":
              if(pTransversalOrLongitudinalElem == "longitudinalDiv1"){
                let d = document.createElement('div');
                d.classList.add('containerOfRoundImg');
                let dImg = document.createElement('div');
                dImg.classList.add('divRoundImg');
                dImg.classList.add('imgsOnDivs');
                d.appendChild(dImg);
                long[2].appendChild(d);
              }else if(pTransversalOrLongitudinalElem == "longitudinalDiv2"){

              }
              break;
            case "divGeneral5":
              if(pTransversalOrLongitudinalElem == "transversalDiv3"){

              }else{

              }
              break;
          
        
            default:
              break;
          }
          break;
        case "section5":
          break;
        default:
          break;
      }
      break;
    case "register":
      break;
    case "home":
      break;
    default:
      break;
  }






 

}// end of function addDivRoundImg

const addImgToDiv = (pPage:string,pSecName:string, pGeneraDivName:string, pTransversalOrLogitudinalType: string, pTransversalOrLongitudinalElem: string, pClassName: string)=>{

  switch(pPage){
    case "landingPage":
      switch(pSecName){
        case "section1":
          break;
        case "section2":
          break;
        case "section3":
          break;
        case "section4":
          switch(pGeneraDivName){
            case "divGeneral1":
                if(pTransversalOrLongitudinalElem == "transversalDiv1"){
                  let dImg = document.getElementsByClassName('imgsOnDivs');
                  dImg[0].id='idTestimonialsImage';
                  dImg[0].classList.add(pClassName);
                }else if(pTransversalOrLongitudinalElem == "transversalDiv2"){
                  let dImg = document.getElementsByClassName('imgsOnDivs');
                  dImg[1].id='idRatingImage';
                  dImg[1].classList.add(pClassName);
                }
              break;
            case "divGeneral2":
              if(pTransversalOrLongitudinalElem == "longitudinalDiv1"){
                let dImg = document.getElementsByClassName('imgsOnDivs');
                dImg[2].id='idInfluencersImage';
                dImg[2].classList.add(pClassName);
                dImg[2].classList.add('adjustLongitudinalWidth');
              }else if(pTransversalOrLongitudinalElem == "longitudinalDiv2"){
                let dImg = document.getElementsByClassName('imgsOnDivs');
                dImg[3].id='idUserGeneratedImage';
                dImg[3].classList.add(pClassName);
                dImg[3].classList.add('adjustLongitudinalWidth');
              }
              break;
            case "divGeneral3":
              if(pTransversalOrLongitudinalElem == "transversalDiv1"){
                let dImg = document.getElementsByClassName('imgsOnDivs');
                dImg[4].id='idMediaMentionsImage';
                dImg[4].classList.add(pClassName);
              }else if(pTransversalOrLongitudinalElem == "transversalDiv2"){
                
              }
              break;
            case "divGeneral4":
              if(pTransversalOrLongitudinalElem == "longitudinalDiv1"){

                
              }else if(pTransversalOrLongitudinalElem == "longitudinalDiv2"){
                let dImg = document.getElementsByClassName('imgsOnDivs');
                dImg[5].id='idRankedImage';
                dImg[5].classList.add(pClassName);
                dImg[5].classList.add('adjustLongitudinalWidth');
              }
              break;
            case "divGeneral5":
              if(pTransversalOrLongitudinalElem == "transversalDiv1"){
                let dImg = document.getElementsByClassName('imgsOnDivs');
                dImg[6].id='idAwardsImg';
                dImg[6].classList.add(pClassName);
                console.log(dImg);
              }else if(pTransversalOrLongitudinalElem == "transversalDiv2"){
                let dImg = document.getElementsByClassName('imgsOnDivs');
                dImg[7].id='idUsersSuccessStoriesImg';
                dImg[7].classList.add(pClassName);
              }
              break;
          
              // ESTE DEFAULT ES MUY IMPORTANTE PARA COLOCAR CONTENIDOS EN DONDE NO HALLAN DIVGENERALS
            default:
              break;
          }
          break;
        case "section5":
          break;
        default:
          break;
      }
      break;
    case "register":
      break;
    case "home":
      break;
    default:
      break;
  }

} // end of arrow function addImgToDiv

/*       
    ---- hueco hueco socialMedia y TimeSavings--
   
*/

const addDivContent = (pPage:string,pSecName:string, pGeneraDivName:string, pTransversalOrLogitudinalType: string, pTransversalOrLongitudinalElem: string/*,pDataJson:LandingPageContent*/) => {
  
  let r = document.getElementsByClassName('transversalDiv');
  let long = document.getElementsByClassName('longitudinalDiv');
  
  switch(pPage){
    case "landingPage":
      switch(pSecName){
        case "section1":

          if(pTransversalOrLongitudinalElem == "transversalDiv1"){
            let d = document.createElement('div');
            d.classList.add('centeredTransversalDivContent');
            let h1 = document.createElement('h1');
            h1.innerHTML ="Need a recipe on time? Come with us now!" /*String(pDataJson.testimonialTitles[0])*/;
            h1.id = 'IdMainH1';
            let p = document.createElement('p');
            p.innerHTML = "Best recipes for the moment, or preparing an appointment to share with some! Come to us! Our pleasure will be always to help you."/*String(pDataJson.testimonialParagraphs[0])*/;
            p.id ='IdMainSociaProofParraf';
            d.appendChild(h1);
            d.appendChild(p);
            r[0].appendChild(d);
          }else if(pTransversalOrLongitudinalElem == "transversalDiv2"){

          }

          break;
        case "section2":

          if(pTransversalOrLongitudinalElem == "transversalDiv1"){
            let d = document.createElement('div');
            d.classList.add('litleSquaresAdjustForDivContent');
            let h2 = document.createElement('h2');
            h2.id='IdFeaturesH21';
            h2.innerHTML ="Personalized Recipe Recommendations" /*String(pDataJson.testimonialTitles[0])*/;
            let p = document.createElement('p');
            p.id='IdPFeatures1';
            p.innerHTML = "Our app provides personalized recipe recommendations based on your preferences and dietary restrictions. By analyzing your previous choices and favorite cuisines, it suggests dishes that suit your taste and nutritional needs."/*String(pDataJson.testimonialParagraphs[0])*/;
            d.appendChild(h2);
            d.appendChild(p);
            r[3].appendChild(d);
          }else if(pTransversalOrLongitudinalElem == "transversalDiv2"){
            let d = document.createElement('div');
            d.classList.add('litleSquaresAdjustForDivContent');
            let h2 = document.createElement('h2');
            h2.id = 'IdFeaturesH22';
            h2.innerHTML ="Step-by-Step Cooking Instructions" /*String(pDataJson.testimonialTitles[0])*/;
            let p = document.createElement('p');
            p.id='IdPFeatures2';
            p.innerHTML = "With step-by-step cooking instructions, even novice cooks can create delicious meals. Each recipe breaks down the process into manageable steps, complete with tips and tricks to ensure success."/*String(pDataJson.testimonialParagraphs[0])*/;
            d.appendChild(h2);
            d.appendChild(p);
            console.log(r);
            r[5].appendChild(d);
          }

          break;
        case "section3":

          if(pTransversalOrLongitudinalElem == "longitudinalDiv1"){
            let divSec3ImgBack = document.getElementsByClassName('generalBenefitsSliderImg')[0];
            let d = document.createElement('div');
            d.classList.add('divContentLongitudinalForDivBackImg');
            d.classList.add('coverALittleTheBackGroundWithGrey');
            let h2 = document.createElement('h2');
            h2.id='IdBenefitsH21';
            h2.innerHTML = "Healthier Eating Made Easy"/*String(pDataJson.influencerTitles[0])*/;
            let p = document.createElement('p');
            p.id='IdPBenefits1';
            p.innerHTML = "Our app offers a variety of healthy recipes that cater to different dietary needs. Whether you’re looking for low-carb, high-protein, or vegan options, we have you covered. Enjoy nutritious meals without compromising on taste."/*String(pDataJson.influencerParagraphs[0])*/;
            d.appendChild(h2);
            d.appendChild(p);
            divSec3ImgBack.appendChild(d);
          }else if(pTransversalOrLongitudinalElem == "longitudinalDiv2"){

          }

          break;
        case "section4":
          switch(pGeneraDivName){
            case "divGeneral1":
                if(pTransversalOrLongitudinalElem == "transversalDiv1"){
                  let d = document.createElement('div');
                  d.classList.add('divContentTransversalForARoundDivImg');
                  d.classList.add('coverALittleTheBackGroundWithGrey');
                  d.classList.add('centerAdjustmentForDivContent');
                  let h2 = document.createElement('h2');
                  h2.id='idH3Testimonials';
                  h2.innerHTML ="A Lifesaver for Busy Moms!" /*String(pDataJson.testimonialTitles[0])*/;
                  let p = document.createElement('p');
                  p.id='idPTestimonials';
                  p.innerHTML = "This app has been a lifesaver for me as a busy mom. I can quickly find healthy recipes that my kids love and prepare meals without stress."/*String(pDataJson.testimonialParagraphs[0])*/;
                  d.appendChild(h2);
                  d.appendChild(p);
                  r[6].appendChild(d);
                }else if(pTransversalOrLongitudinalElem == "transversalDiv2"){
                  let d = document.createElement('div');
                  d.classList.add('divContentTransversalForMiniSliders');
                  d.classList.add('coverALittleTheBackGroundWithGrey');
                  d.classList.add('centerAdjustmentForDivContent');
                  let h2 = document.createElement('h2');
                  h2.id='idH3Ratings';
                  h2.innerHTML = "Top-Rated by Users"/*String(pDataJson.starRatingTitles[0])*/;
                  let p = document.createElement('p');
                  p.id='idPRatings';
                  p.innerHTML = "Our users have rated this app as the top choice for finding and cooking delicious recipes. Join the satisfied community today!"/*String(pDataJson.starRatingParagraphs[0])*/;
                  d.appendChild(h2);
                  d.appendChild(p);
                  r[7].appendChild(d);
                }
              break;
            case "divGeneral2":
              if(pTransversalOrLongitudinalElem == "longitudinalDiv1"){
                let d = document.createElement('div');
                d.classList.add('divContentTransversalForARoundDivImg');
                d.classList.add('adjustmentForLongitudinalDivContent');
                d.classList.add('coverALittleTheBackGroundWithGrey');
                d.classList.add('centerAdjustmentForDivContent');
                d.classList.add('addALittleMarginTop');
                let h2 = document.createElement('h2');
                h2.id='idH3Influencers';
                h2.innerHTML = "Endorsed by Top Chefs"/*String(pDataJson.influencerTitles[0])*/;
                let p = document.createElement('p');
                p.id='idPInfluencers';
                p.innerHTML = "Top chefs from around the world endorse our app for its wide range of high-quality recipes and user-friendly interface."/*String(pDataJson.influencerParagraphs[0])*/;
                d.appendChild(h2);
                d.appendChild(p);
                long[2].appendChild(d);
              }else if(pTransversalOrLongitudinalElem == "longitudinalDiv2"){
                let d = document.createElement('div');
                d.classList.add('divContentTransversalForARoundDivImg');
                d.classList.add('adjustmentForLongitudinalDivContent');
                d.classList.add('coverALittleTheBackGroundWithGrey');
                d.classList.add('centerAdjustmentForDivContent');
                d.classList.add('addALitleMarginLeft');
                d.classList.add('addALittleMarginTop');
                let h2 = document.createElement('h2');
                h2.id='idH3UserGenerated';
                h2.innerHTML = "Join Our Cooking Community"/*String(pDataJson.userGeneratedContentTitles[0])*/;
                let p = document.createElement('p');
                p.id='idPUserGenerated';
                p.innerHTML = "Join our vibrant cooking community and share your own recipes with others. Inspire and be inspired by fellow home cooks."/*String(pDataJson.userGeneratedContentParagraphs[0])*/;
                d.appendChild(h2);
                d.appendChild(p);
                long[3].appendChild(d);
              }
              break;
            case "divGeneral3":
              if(pTransversalOrLongitudinalElem == "transversalDiv1"){
                let d = document.createElement('div');
                d.classList.add('divContentTransversalForARoundDivImg');
                d.classList.add('coverALittleTheBackGroundWithGrey');
                d.classList.add('centerAdjustmentForDivContent');
                let h2 = document.createElement('h2');
                h2.id='idMediaMentionsH3';
                h2.innerHTML = "Featured in Top Magazines"/*String(pDataJson.mediaMentionsTitles[0])*/;
                let p = document.createElement('p');
                p.id='idMediaMentionsP';
                p.innerHTML = "Our app has been featured in top magazines for its innovative approach to recipe sharing and meal planning."/*String(pDataJson.mediaMentionsParagraphs[0])*/;
                d.appendChild(h2);
                d.appendChild(p);
                r[8].appendChild(d);
              }else if(pTransversalOrLongitudinalElem == "transversalDiv2"){
                let d = document.createElement('div');
                d.classList.add('divContentTransversalForMiniSliders');
                d.classList.add('coverALittleTheBackGroundWithGrey');
                d.classList.add('centerAdjustmentForDivContent');
                let h2 = document.createElement('h2');
                h2.id='idRankedH3';
                h2.innerHTML = "Impressive User Growth"/*String(pDataJson.statisticsTitles[0])*/;
                let p = document.createElement('p');
                p.id='idRankedP';
                p.innerHTML = "Our app has seen impressive user growth, with thousands of new users joining every month."/*String(pDataJson.statisticsParagraphs[0])*/;
                d.appendChild(h2);
                d.appendChild(p);
                r[9].appendChild(d);
              }
              break;
            case "divGeneral4":
              if(pTransversalOrLongitudinalElem == "longitudinalDiv1"){
                let d = document.createElement('div');
                d.classList.add('divContentTransversalForARoundDivImg');
                d.classList.add('adjustmentForLongitudinalDivContent');
                d.classList.add('coverALittleTheBackGroundWithGrey');
                d.classList.add('centerAdjustmentForDivContent');
                d.classList.add('addALittleMarginTop');
                let h2 = document.createElement('h2');
                h2.id='idSocialMediaH3';
                h2.innerHTML = "Follow Us on Instagram"/*String(pDataJson.socialMediaTitles[0])*/;
                let p = document.createElement('p');
                p.id='idSocialMediaP';
                p.innerHTML = "Follow us on Instagram for daily recipe inspiration, cooking tips, and behind-the-scenes content."/*String(pDataJson.socialMediaParagraphs[0])*/;
                d.appendChild(h2);
                d.appendChild(p);
                long[4].appendChild(d);
              }else if(pTransversalOrLongitudinalElem == "longitudinalDiv2"){
                let d = document.createElement('div');
                d.classList.add('divContentTransversalForARoundDivImg');
                d.classList.add('adjustmentForLongitudinalDivContent');
                d.classList.add('coverALittleTheBackGroundWithGrey');
                d.classList.add('centerAdjustmentForDivContent');
                d.classList.add('addALitleMarginLeft');
                d.classList.add('addALittleMarginTop');
                let h2 = document.createElement('h2');
                h2.id='idTimeSavingH3';
                h2.innerHTML = "Quick Meal Prep Tips"/*String(pDataJson.timeSavingTipsTitles[0])*/;
                let p = document.createElement('p');
                p.id='idTimeSavingP';
                p.innerHTML = "Discover quick meal prep tips that help you save time in the kitchen without sacrificing quality or flavor."/*String(pDataJson.timeSavingTipsParagraphs[0])*/;
                d.appendChild(h2);
                d.appendChild(p);
                long[5].appendChild(d);
              }
              break;
            case "divGeneral5":
              if(pTransversalOrLongitudinalElem == "transversalDiv1"){
                let d = document.createElement('div');
                d.classList.add('divContentTransversalForARoundDivImg');
                d.classList.add('coverALittleTheBackGroundWithGrey');
                d.classList.add('centerAdjustmentForDivContent');
                let h2 = document.createElement('h2');
                h2.id='idAwardsH3';
                h2.innerHTML = "Best Recipe App Award"/*String(pDataJson.awardsTitles[0])*/;
                let p = document.createElement('p');
                p.id='idAwardsP';
                p.innerHTML = "Winner of the Best Recipe App Award, recognized for its comprehensive features and user-friendly design."/*String(pDataJson.awardsParagraphs[0])*/;
                d.appendChild(h2);
                d.appendChild(p);
                r[10].appendChild(d);
              }else if(pTransversalOrLongitudinalElem == "transversalDiv2"){
                let d = document.createElement('div');
                d.classList.add('divContentTransversalForMiniSliders');
                d.classList.add('coverALittleTheBackGroundWithGrey');
                d.classList.add('centerAdjustmentForDivContent');
                let h2 = document.createElement('h2');
                h2.id='idUsersSuccessStoriesH3';
                h2.innerHTML = "From Novice to Pro"/*String(pDataJson.successStoriesTitles[0])*/;
                let p = document.createElement('p');
                p.id='idUsersSuccessStoriesP';
                p.innerHTML = "I went from a novice to a confident cook thanks to this app. The step-by-step instructions and video tutorials were game-changers."/*String(pDataJson.successStoriesParagraphs[0])*/;
                d.appendChild(h2);
                d.appendChild(p);
                r[11].appendChild(d);
              }
              break;
          
        
            default:
              break;
          }
          break;
        case "section5":

          if(pTransversalOrLongitudinalElem == "transversalDiv1"){

          }else if(pTransversalOrLongitudinalElem == "transversalDiv2"){
            let d = document.createElement('div');
            d.classList.add('divContentTransversalForMiniSliders');
            d.classList.add('coverALittleTheBackGroundWithGrey');
            d.classList.add('centerAdjustmentForDivContent');
            d.classList.add('addALittleMarginTop');
            let h2 = document.createElement('h2');
            h2.id='idH3LCTA';
            h2.innerHTML = "Take the First Step Today!"/*String(pDataJson.starRatingTitles[0])*/;
            let p = document.createElement('p');
            p.id='idPLCTA';
            p.innerHTML = "Your journey to success starts with a single click. Join us now and gain access to exclusive resources and a supportive community that will help you achieve your dreams. Don’t wait—start now!"/*String(pDataJson.starRatingParagraphs[0])*/;
            d.appendChild(h2);
            d.appendChild(p);
            r[13].appendChild(d);
          }

          break;
        default:
          break;
      }
      break;
    case "register":
      break;
    case "home":
      break;
    default:
      break;
  }
} // end of arrow function addDivContent


const addDivButton = (pPage:string,pSecName:string, pGeneraDivName:string, pTransversalOrLogitudinalType: string, pTransversalOrLogitudinalElem: string,pIdBtn:string,pClassName:string,pInnerContent:string)=>{
 
  let r = document.getElementsByClassName('transversalDiv');
  let long = document.getElementsByClassName('longitudinalDiv');
 
  switch(pPage){
    case "landingPage":
      switch(pSecName){
        case "section1":

          if(pTransversalOrLogitudinalElem == "transversalDiv1"){
            let d = document.createElement('div');
            d.classList.add('containerOfButtonSliders');
            let btn = document.createElement('button');
            btn.setAttribute('type','button');
            btn.id = pIdBtn;
            btn.classList.add(pClassName);
            btn.innerHTML = pInnerContent;
            d.appendChild(btn);
            r[0].appendChild(d);
          }else if(pTransversalOrLogitudinalElem == "transversalDiv2"){

          }

          break;
        case "section2":

          if(pTransversalOrLogitudinalElem == "transversalDiv1"){
            let d = document.createElement('div');
            d.classList.add('containerOfButtonSliders');
            d.classList.add('addHalfALittleMarginTop');
            let btn = document.createElement('button');
            btn.setAttribute('type','button');
            btn.id = pIdBtn;
            btn.classList.add(pClassName);
            btn.innerHTML = pInnerContent;
            d.appendChild(btn);
            r[2].appendChild(d);
          }else if(pTransversalOrLogitudinalElem == "transversalDiv2"){

          }

          break;
        case "section3":

          if(pTransversalOrLogitudinalElem == "longitudinalDiv1"){
            let divBackImgSec3 = document.getElementsByClassName('generalBenefitsSliderImg')[0];
            let d = document.createElement('div');
            d.classList.add('containerOfButtonSliders');
            d.classList.add('buttonAdjustmentAtBottomLeftCorner');
            let btn = document.createElement('button');
            btn.setAttribute('type','button');
            btn.id = pIdBtn;
            btn.classList.add(pClassName);
            btn.innerHTML = pInnerContent;
            d.appendChild(btn);
            divBackImgSec3.appendChild(d);
          }else if(pTransversalOrLogitudinalElem == "longitudinalDiv2"){

          }

          break;
        case "section4":
          switch(pGeneraDivName){
            case "divGeneral1":
                if(pTransversalOrLogitudinalElem == "transversalDiv1"){
                  let d = document.createElement('div');
                  d.classList.add('containerOfButtonSliders');
                  d.classList.add('removeMarginTop');
                  let btn = document.createElement('button');
                  btn.setAttribute('type','button');
                  btn.id = pIdBtn;
                  btn.classList.add(pClassName);
                  btn.innerHTML = pInnerContent;
                  d.appendChild(btn);
                  r[6].appendChild(d);
                }else if(pTransversalOrLogitudinalElem == "transversalDiv2"){

                }
              break;
            case "divGeneral2":
              if(pTransversalOrLogitudinalElem == "longitudinalDiv1"){
                let d = document.createElement('div');
                d.classList.add('containerOfButtonSliders');
                d.classList.add('removeMarginLeft');
                d.classList.add('addALittleMarginTop');
                let btn = document.createElement('button');
                btn.setAttribute('type','button');
                btn.id = pIdBtn;
                btn.classList.add(pClassName);
                btn.innerHTML = pInnerContent;
                d.appendChild(btn);
                long[2].appendChild(d);
              }else if(pTransversalOrLogitudinalElem == "longitudinalDiv2"){

              }
              break;
            case "divGeneral3":
              if(pTransversalOrLogitudinalElem == "transversalDiv1"){
                let d = document.createElement('div');
                d.classList.add('containerOfButtonSliders');
                let btn = document.createElement('button');
                btn.setAttribute('type','button');
                btn.id = pIdBtn;
                btn.classList.add(pClassName);
                btn.innerHTML = pInnerContent;
                d.appendChild(btn);
                r[8].appendChild(d);
              }else if(pTransversalOrLogitudinalElem == "transversalDiv2"){

              }
              break;
            case "divGeneral4":
              if(pTransversalOrLogitudinalElem == "longitudinalDiv1"){
                let d = document.createElement('div');
                d.classList.add('containerOfButtonSliders');
                let btn = document.createElement('button');
                btn.setAttribute('type','button');
                btn.id = pIdBtn;
                btn.classList.add(pClassName);
                btn.innerHTML = pInnerContent;
                d.appendChild(btn);
                long[4].appendChild(d);
              }else if(pTransversalOrLogitudinalElem == "longitudinalDiv2"){

              }
              break;
            case "divGeneral5":
              if(pTransversalOrLogitudinalElem == "transversalDiv1"){
                let d = document.createElement('div');
                d.classList.add('containerOfButtonSliders');
                let btn = document.createElement('button');
                btn.setAttribute('type','button');
                btn.id = pIdBtn;
                btn.classList.add(pClassName);
                btn.innerHTML = pInnerContent;
                d.appendChild(btn);
                r[10].appendChild(d);
              }else if(pTransversalOrLogitudinalElem == "transversalDiv2"){

              }
              break;
          
        
            default:
              break;
          }
          break;
        case "section5":

          if(pTransversalOrLogitudinalElem == "transversalDiv1"){

          }else if(pTransversalOrLogitudinalElem == "transversalDiv2"){
            let d = document.createElement('div');
            d.classList.add('containerOfButtonSliders');
            let btn = document.createElement('button');
            btn.setAttribute('type','button');
            btn.id = pIdBtn;
            btn.classList.add(pClassName);
            btn.innerHTML = pInnerContent;
            d.appendChild(btn);
            r[13].appendChild(d);
          }

          break;
        default:
          break;
      }
      break;
    case "register":
      break;
    case "home":
      break;
    default:
      break;
  }
} // end of arrow function addDivBtn

const addLineYChart = (pPage:string,pSecName:string, pGeneraDivName:string, pTransversalOrLogitudinalType: string, pTransversalOrLongitudinalElem: string)=>{
 
  let r = document.getElementsByClassName('transversalDiv');
  let long = document.getElementsByClassName('longitudinalDiv');
 
  switch(pPage){
    case "landingPage":
      switch(pSecName){
        case "section1":
          break;
        case "section2":
          break;
        case "section3":
          break;
        case "section4":
          switch(pGeneraDivName){
            case "divGeneral1":
                if(pTransversalOrLongitudinalElem == "transversalDiv1"){

                }else{

                }
              break;
            case "divGeneral2":
              if(pTransversalOrLongitudinalElem == "longitudinalDiv1"){
              }else{
              }
              break;
            case "divGeneral3":
              if(pTransversalOrLongitudinalElem == "transversalDiv2"){

              }else{

              }
              break;
            case "divGeneral4":
              if(pTransversalOrLongitudinalElem == "longitudinalDiv1"){
                let divGraphicDivGeneral1Div1 = document.createElement('div');
                divGraphicDivGeneral1Div1.classList.add('divChart');
                // Use createRoot to render the BarChart component inside the divGraphicDivGeneral1Div1 element
                const root = createRoot(divGraphicDivGeneral1Div1);
                root.render(<LineYChart />);
                long[4].appendChild(divGraphicDivGeneral1Div1);
              }else if(pTransversalOrLongitudinalElem == "longitudinalDiv2"){
                
              }
              break;
            case "divGeneral5":
              if(pTransversalOrLongitudinalElem == "transversalDiv3"){

              }else{

              }
              break;
          
        
            default:
              break;
          }
          break;
        case "section5":
          break;
        default:
          break;
      }
      break;
    case "register":
      break;
    case "home":
      break;
    default:
      break;
  }
} // end of arrow function addLineYChart

const addLineChart = (pPage:string,pSecName:string, pGeneraDivName:string, pTransversalOrLogitudinalType: string, pTransversalOrLongitudinalElem: string)=>{
 
  let r = document.getElementsByClassName('transversalDiv');
  let long = document.getElementsByClassName('longitudinalDiv');
 
  switch(pPage){
    case "landingPage":
      switch(pSecName){
        case "section1":
          break;
        case "section2":
          break;
        case "section3":
          break;
        case "section4":
          switch(pGeneraDivName){
            case "divGeneral1":
                if(pTransversalOrLongitudinalElem == "transversalDiv1"){

                }else{

                }
              break;
            case "divGeneral2":
              if(pTransversalOrLongitudinalElem == "longitudinalDiv1"){
              }else{
              }
              break;
            case "divGeneral3":
              if(pTransversalOrLongitudinalElem == "transversalDiv1"){

              }else if(pTransversalOrLongitudinalElem == "transversalDiv2"){
                let divGraphicDivGeneral1Div1 = document.createElement('div');
                divGraphicDivGeneral1Div1.classList.add('divChart');
                // Use createRoot to render the BarChart component inside the divGraphicDivGeneral1Div1 element
                const root = createRoot(divGraphicDivGeneral1Div1);
                root.render(<LineChart />);
                r[9].appendChild(divGraphicDivGeneral1Div1);
              }
              break;
            case "divGeneral4":
              if(pTransversalOrLongitudinalElem == "longitudinalDiv2"){

              }else{

              }
              break;
            case "divGeneral5":
              if(pTransversalOrLongitudinalElem == "transversalDiv3"){

              }else{

              }
              break;
          
        
            default:
              break;
          }
          break;
        case "section5":
          break;
        default:
          break;
      }
      break;
    case "register":
      break;
    case "home":
      break;
    default:
      break;
  }
} // end of arrow function addLineChart

const addBarChart = (pPage:string,pSecName:string, pGeneraDivName:string, pTransversalOrLogitudinalType: string, pTransversalElem: string)=>{
 
  let r = document.getElementsByClassName('transversalDiv');
  let long = document.getElementsByClassName('longitudinalDiv');
 
  switch(pPage){
    case "landingPage":
      switch(pSecName){
        case "section1":
          break;
        case "section2":
          break;
        case "section3":
          break;
        case "section4":
          switch(pGeneraDivName){
            case "divGeneral1":
                if(pTransversalElem == "transversalDiv1"){
                  let divGraphicDivGeneral1Div1 = document.createElement('div');
                  divGraphicDivGeneral1Div1.classList.add('divChart');
                  divGraphicDivGeneral1Div1.classList.add('littleLeftMarginAdjustment');
                  // Use createRoot to render the BarChart component inside the divGraphicDivGeneral1Div1 element
                  const root = createRoot(divGraphicDivGeneral1Div1);
                  root.render(<BarChart />);
                  r[6].appendChild(divGraphicDivGeneral1Div1);
                }else{

                }
              break;
            case "divGeneral2":
              if(pTransversalElem == "longitudinalDiv1"){
              }else{
              }
              break;
            case "divGeneral3":
              if(pTransversalElem == "transversalDiv2"){

              }else{

              }
              break;
            case "divGeneral4":
              if(pTransversalElem == "longitudinalDiv2"){

              }else{

              }
              break;
            case "divGeneral5":
              if(pTransversalElem == "transversalDiv3"){

              }else{

              }
              break;
          
        
            default:
              break;
          }
          break;
        case "section5":
          break;
        default:
          break;
      }
      break;
    case "register":
      break;
    case "home":
      break;
    default:
      break;
  }
} // end of arrow function barChart

const addDivMiniSlider = (pPage:string,pSecName:string, pGeneraDivName:string, pTransversalOrLogitudinalType: string, pTransversalOrLongitudinalElem: string)=>{
 
  let r = document.getElementsByClassName('transversalDiv');
  let long = document.getElementsByClassName('longitudinalDiv');
 
  switch(pPage){
    case "landingPage":
      switch(pSecName){
        case "section1":

          if(pTransversalOrLongitudinalElem == "transversalDiv1"){

          }else if(pTransversalOrLongitudinalElem == "transversalDiv2"){
            let d = document.createElement('div');
            d.classList.add('generalmainSlider');
            let dImg = document.createElement('div');
            dImg.id = 'IdMainImgBackDefault';
            dImg.classList.add('generalmainSliderImg');
            d.appendChild(dImg);
            r[1].appendChild(d);
          }

          break;
        case "section2":
          break;
        case "section3":


          if(pTransversalOrLongitudinalElem == "longitudinalDiv1"){
            let d = document.createElement('div');
            d.classList.add('generalBenefitsSlider');
            let dImg = document.createElement('div');
            dImg.id='IdBenefitsImgBackDefault';
            dImg.classList.add('generalBenefitsSliderImg');
            d.appendChild(dImg);
            long[1].appendChild(d);
          }else if(pTransversalOrLongitudinalElem == "longitudinalDiv2"){

          }

          break;
        case "section4":
          switch(pGeneraDivName){
            case "divGeneral1":
                if(pTransversalOrLongitudinalElem == "transversalDiv1"){
                  let d = document.createElement('div');
                  d.classList.add('containerOfMiniSliderImg');
                  let dImg = document.createElement('div');
                  dImg.classList.add('divMiniSliderImg');
                  dImg.classList.add('imgsOnDivs');
                  d.appendChild(dImg);
                  r[6].appendChild(d);
                }else if(pTransversalOrLongitudinalElem == "transversalDiv2"){
                  let d = document.createElement('div');
                  d.classList.add('containerOfMiniSliderImg');
                  d.classList.add('addHalfALittleMarginTop');
                  d.classList.add('addALitleMarginLeft');
                  let dImg = document.createElement('div');
                  dImg.classList.add('divMiniSliderImg');
                  dImg.classList.add('imgsOnDivs');
                  d.appendChild(dImg);
                  r[7].appendChild(d);
                }
              break;
            case "divGeneral2":
              if(pTransversalOrLongitudinalElem == "longitudinalDiv1"){
                let d = document.createElement('div');
                d.classList.add('containerOfMiniSliderImg');
                let dImg = document.createElement('div');
                dImg.classList.add('divMiniSliderImg');
                dImg.classList.add('imgsOnDivs');
                d.appendChild(dImg);
                long[2].appendChild(d);
              }else if(pTransversalOrLongitudinalElem == "longitudinalDiv2"){
                let d = document.createElement('div');
                d.classList.add('containerOfMiniSliderImg');
                let dImg = document.createElement('div');
                dImg.classList.add('divMiniSliderImg');
                dImg.classList.add('removeMarginTop');
                dImg.classList.add('imgsOnDivs');
                d.appendChild(dImg);
                long[3].appendChild(d);
              }
              break;
            case "divGeneral3":
              if(pTransversalOrLongitudinalElem == "transversalDiv1"){
                let d = document.createElement('div');
                d.classList.add('containerOfMiniSliderImg');
                d.classList.add('addALitleMarginLeft');
                let dImg = document.createElement('div');
                dImg.classList.add('divMiniSliderImg');
                dImg.classList.add('imgsOnDivs');
                d.appendChild(dImg);
                r[8].appendChild(d);
              }else if(pTransversalOrLongitudinalElem == "transversalDiv2"){
                let d = document.createElement('div');
                d.classList.add('containerOfMiniSliderImg');
                let dImg = document.createElement('div');
                dImg.classList.add('divMiniSliderImg');
                dImg.classList.add('imgsOnDivs');
                d.appendChild(dImg);
                r[9].appendChild(d);
              }
              break;
            case "divGeneral4":
              if(pTransversalOrLongitudinalElem == "longitudinalDiv1"){

              }else if(pTransversalOrLongitudinalElem == "longitudinalDiv2"){
                let d = document.createElement('div');
                d.classList.add('containerOfMiniSliderImg');
                d.classList.add('removeMarginTop');
                let dImg = document.createElement('div');
                dImg.classList.add('divMiniSliderImg');
                dImg.classList.add('imgsOnDivs');
                dImg.classList.add('removeMarginTop');
                d.appendChild(dImg);
                long[5].appendChild(d);
              }
              break;
            case "divGeneral5":
              if(pTransversalOrLongitudinalElem == "transversalDiv1"){
                let d = document.createElement('div');
                d.classList.add('containerOfMiniSliderImg');
                d.classList.add('addHalfALitleCuarterMarginTop');
                let dImg = document.createElement('div');
                dImg.classList.add('divMiniSliderImg');
                dImg.classList.add('imgsOnDivs');
                d.appendChild(dImg);
                r[10].appendChild(d);
              }else if(pTransversalOrLongitudinalElem == "transversalDiv2"){
                let d = document.createElement('div');
                d.classList.add('containerOfMiniSliderImg');
                d.classList.add('addALitleMarginLeft');
                d.classList.add('addHalfALitleCuarterMarginTop');
                let dImg = document.createElement('div');
                dImg.classList.add('divMiniSliderImg');
                dImg.classList.add('imgsOnDivs');
                d.appendChild(dImg);
                r[11].appendChild(d);
              }
              break;
          
        
            default:
              break;
          }
          break;
        case "section5":


          if(pTransversalOrLongitudinalElem == "transversalDiv1"){
            let d = document.createElement('div');
            d.classList.add('generalmainSlider');
            d.classList.add('addALitleMarginLeft');
            let dImg = document.createElement('div');
            dImg.classList.add('generalLCTASliderImg');
            dImg.id='idBackImgLCTA';
            d.appendChild(dImg);
            r[12].appendChild(d);
          }else if(pTransversalOrLongitudinalElem == "transversalDiv2"){

          }

          break;
        default:
          break;
      }
      break;
    case "register":
      break;
    case "home":
      break;
    default:
      break;
  }
} // end of arrow function barChart


const createPage = async (pPage:string) =>{

    //console.log(pDataJson);
    switch(pPage){
        case "landingPage":

            // a section1  
            let section1 = document.createElement('section');
            section1.id = "idSection1Landing";
            section1.classList.add("section1Landing");
            // a section2  
            let section2 = document.createElement('section');
            section2.id = "idSection2Landing";
            section2.classList.add("section2Landing");
            // a section3
            let section3 = document.createElement('section');
            section3.id = "idSection3Landing";
            section3.classList.add("section3Landing");
            // a section4
            let section4 = document.createElement('section');
            section4.id = "idSection4Landing";
            section4.classList.add("section4Landing");
            // a section5
            let section5 = document.createElement('section');
            section5.id = "idSection5Landing";
            section5.classList.add("section5Landing");

            // section 1 main -------------------------------------------------
            addGeneralContainer("landingPageMain",section1);
            addLongitudinalDiv("landingPageMain","");
            addTransversalDiv("landingPageMain","toLongitudinal");
            addTransversalDiv("landingPageMain","toLongitudinal");
            addDivContent("landingPage","section1","divGeneral","transversalDiv","transversalDiv1"/*,pDataJson*/);
            addDivButton("landingPage","section1","divGeneral","transversalDiv","transversalDiv1","IdCarouselBtn","slidingButtonsLandingPage","▶");
            addDivButton("landingPage","section1","divGeneral","transversalDiv","transversalDiv1","IdCallToActionBtn1","callToActionBtn","Welcome");
            addDivMiniSlider("landingPage","section1","divGeneral","transversalDiv","transversalDiv2");
            // end of section 1 main -------------------------------------------------

            // section 2 features -------------------------------------------------
            addGeneralContainer("landingPageFeatures",section2);
            addTransversalDiv("landingPageFeatures","");
            addTransversalDiv("landingPageFeatures","");
            addTransversalDiv("landingPageFeatures","toTransversal1");
            addTransversalDiv("landingPageFeatures","toTransversal2");
            addDivButton("landingPage","section2","divGeneral","transversalDiv","transversalDiv1","IdSliderBtnFeatures","slidingButtonsLandingPage","▶");
            addDivContent("landingPage","section2","divGeneral","transversalDiv","transversalDiv1"/*,pDataJson*/);
            addDivContent("landingPage","section2","divGeneral","transversalDiv","transversalDiv2"/*,pDataJson*/);

            // end of section 2 features -------------------------------------------------

            // section 3 benefits -------------------------------------------------
            addGeneralContainer("landingPageBenefits",section3);
            addLongitudinalDiv("landingPageBenefits","");
            addDivMiniSlider("landingPage","section3","divGeneral","longitudinalDiv","longitudinalDiv1");
            addDivContent("landingPage","section3","divGeneral","longitudinalDiv","longitudinalDiv1"/*,pDataJson*/);
            addDivButton("landingPage","section3","divGeneral","longitudinalDiv","longitudinalDiv1","IdSliderBtnBenefits","slidingButtonsLandingPage","▶");

            // end of section 3 benefits -------------------------------------------------


            // section 4 social proof -------------------------------------------------

            // add all the general divs

            addGeneralContainer("landingPageSocialProof",section4);
            addGeneralContainer("landingPageSocialProof",section4);
            addGeneralContainer("landingPageSocialProof",section4);
            addGeneralContainer("landingPageSocialProof",section4);
            addGeneralContainer("landingPageSocialProof",section4);

            // add two divs inside the general divs; one Transversal, second longitudinal, thirth transversal, 4 longitu, 5 trans

            addTransversalDiv("landingPageSocialProof","divGeneral1");
            addTransversalDiv("landingPageSocialProof","divGeneral1");
            addLongitudinalDiv("landingPageSocialProof","divGeneral2");
            addLongitudinalDiv("landingPageSocialProof","divGeneral2");
            addTransversalDiv("landingPageSocialProof","divGeneral3");
            addTransversalDiv("landingPageSocialProof","divGeneral3");
            addLongitudinalDiv("landingPageSocialProof","divGeneral4");
            addLongitudinalDiv("landingPageSocialProof","divGeneral4");
            addTransversalDiv("landingPageSocialProof","divGeneral5");
            addTransversalDiv("landingPageSocialProof","divGeneral5");

            // 1- then add to the first transversal div from generalDiv1 all the things
            addDivRoundImg("landingPage","section4","divGeneral1","transversalDiv","transversalDiv1");
            addImgToDiv("landingPage","section4","divGeneral1","transversalDiv","transversalDiv1","testimonialsRoundImg");
            addDivContent("landingPage","section4","divGeneral1","transversalDiv","transversalDiv1"/*,pDataJson*/);
            addBarChart("landingPage","section4","divGeneral1","transversalDiv","transversalDiv1");
            addDivButton("landingPage","section4","divGeneral1","transversalDiv","transversalDiv1","IdSliderBtnSocialProof1","slidingButtonsLandingPage","▶");
            // 2- then add to the second transversal div from generalDiv1 all the things
            addDivMiniSlider("landingPage","section4","divGeneral1","transversalDiv","transversalDiv2");
            addImgToDiv("landingPage","section4","divGeneral1","transversalDiv","transversalDiv2","rankedMiniSlider");
            addDivContent("landingPage","section4","divGeneral1","transversalDiv","transversalDiv2"/*,pDataJson*/);
         
            // 3- then add to the first longitudinal div from generalDiv2 all the things
            addDivMiniSlider("landingPage","section4","divGeneral2","longitudinalDiv","longitudinalDiv1");
            addImgToDiv("landingPage","section4","divGeneral2","longitudinalDiv","longitudinalDiv1","influencersMiniSlider");
            addDivContent("landingPage","section4","divGeneral2","longitudinalDiv","longitudinalDiv1"/*,pDataJson*/);
            addDivButton("landingPage","section4","divGeneral2","transversalDiv","longitudinalDiv1","IdSliderBtnSocialProof2","slidingButtonsLandingPage","▶");

            // 4- then add to the fourth longitudinal div from generalDiv2 all the things
            addDivContent("landingPage","section4","divGeneral2","longitudinalDiv","longitudinalDiv2");
            addDivMiniSlider("landingPage","section4","divGeneral2","longitudinalDiv","longitudinalDiv2");
            addImgToDiv("landingPage","section4","divGeneral2","longitudinalDiv","longitudinalDiv2","usersContentMiniSlider");

            // 5- then add to the first Transversal div from generalDiv3 all the things
            addDivMiniSlider("landingPage","section4","divGeneral3","transversalDiv","transversalDiv1");
            addImgToDiv("landingPage","section4","divGeneral3","transversalDiv","transversalDiv1","mediaMentionsRoundImg");
            addDivContent("landingPage","section4","divGeneral3","transversalDiv","transversalDiv1"/*,pDataJson*/);
            addDivButton("landingPage","section4","divGeneral3","transversalDiv","transversalDiv1","IdSliderBtnSocialProof3","slidingButtonsLandingPage","▶");
            
            // 6- then add to the second Transversal div from generalDiv3 all the things
            addDivContent("landingPage","section4","divGeneral3","transversalDiv","transversalDiv2"/*,pDataJson*/);
            addLineChart("landingPage","section4","divGeneral3","transversalDiv","transversalDiv2");

            // 7- then add to the first longitudinal div from generalDiv4 all the things
            //addDivRoundImg("landingPage","section4","divGeneral4","longitudinalDiv","longitudinalDiv1");
            //addImgToDiv("landingPage","section4","divGeneral4","longitudinalDiv","longitudinalDiv1","followersRoundImg");
            addLineYChart("landingPage","section4","divGeneral4","longitudinalDiv","longitudinalDiv1");
            addDivContent("landingPage","section4","divGeneral4","longitudinalDiv","longitudinalDiv1"/*,pDataJson*/);
            addDivButton("landingPage","section4","divGeneral4","longitudinalDiv","longitudinalDiv1","IdSliderBtnSocialProof4","slidingButtonsLandingPage","▶");

            // 8- then add to the first longitudinal div from generalDiv4 all the things
            addDivContent("landingPage","section4","divGeneral4","longitudinalDiv","longitudinalDiv2"/*,pDataJson*/);
            addDivMiniSlider("landingPage","section4","divGeneral4","longitudinalDiv","longitudinalDiv2");
            addImgToDiv("landingPage","section4","divGeneral4","longitudinalDiv","longitudinalDiv2","timeSavingTipsRoundImg");
            

            // 9- then add to the first transversal div from generalDiv5 all the things
            addDivMiniSlider("landingPage","section4","divGeneral5","transversalDiv","transversalDiv1");
            addImgToDiv("landingPage","section4","divGeneral5","transversalDiv","transversalDiv1","awardsRoundImg");
            addDivContent("landingPage","section4","divGeneral5","transversalDiv","transversalDiv1"/*,pDataJson*/);
            addDivButton("landingPage","section4","divGeneral5","transversalDiv","transversalDiv1","IdSliderBtnSocialProof5","slidingButtonsLandingPage","▶");

            // 10- then add to the second transversal div from generalDiv5 all the things
            addDivMiniSlider("landingPage","section4","divGeneral5","transversalDiv","transversalDiv2");
            addImgToDiv("landingPage","section4","divGeneral5","transversalDiv","transversalDiv2","usersSuccessStoriesRoundImg");
            addDivContent("landingPage","section4","divGeneral5","transversalDiv","transversalDiv2"/*,pDataJson*/);

            //  end of section 4 social proof -------------------------------------------------
            
            //  section 5 last call to action -------------------------------------------------

            addGeneralContainer("landingPageLCTA",section5);
            addLongitudinalDiv("landingPageLCTA","");
            addTransversalDiv("landingPageLCTA","toLongitudinal");
            addTransversalDiv("landingPageLCTA","toLongitudinal");
            addDivMiniSlider("landingPage","section5","divGeneral","transversalDiv","transversalDiv1");
            addDivContent("landingPage","section5","divGeneral","transversalDiv","transversalDiv2"/*,pDataJson*/);
            addDivButton("landingPage","section5","divGeneral","transversalDiv","transversalDiv2","idBtnSliderSectionLCTA","slidingButtonsLandingPage","▶");
            addDivButton("landingPage","section5","divGeneral","transversalDiv","transversalDiv2","IdCallToActionBtn2","callToActionBtn","Welcome");

            //  end of section 5 last call to action -------------------------------------------------
            

            break;
       
        default:
            break;
    }








} // end of arrow function createSection1


// Define the functional component
export const createAllPagesDinamically = () => {

        
        createPage("landingPage");

};

// Export the component
export default createAllPagesDinamically;
