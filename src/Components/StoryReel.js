import React from 'react'
import Story from './Story';
import "./StoryReel.css";
import {useStateValue} from "../ContextApi/StateProvider"

function StoryReel() {
    const [{user}, dispatch] = useStateValue();

    return (
        <div className="story-reel">

        <Story image={user.photoURL}
        profileSrc={user.photoURL} 
        title={user.displayName}/>

        <Story image="https://media.extratv.com/2019/10/30/chris-hemsworth-gettyimages-1184282606-510x600.jpg" profileSrc="https://media.nu.nl/m/hmzxos7abprq_sqr256.jpg/chris-hemsworth-pikt-lifter-per-helikopter.jpg" title="Chris Hemsworth"/>
        
        <Story image="https://pyxis.nymag.com/v1/imgs/ae0/673/87b075b9d8649069fb5d79804a2fbd4c89-17-vanessa-hudgens.rsquare.w1200.jpg" profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ9-4ay2sLpQa7W7TnbUCSQvKFIShAmzLPq8Q&usqp=CAU" title="Vanessa Hudgens"/>   

        <Story image="https://www.irishtimes.com/polopoly_fs/1.3996810.1566756972!/image/image.jpg_gen/derivatives/ratio_1x1_w1200/image.jpg" profileSrc="https://imagevars.gulfnews.com/2019/08/26/England-s-Ben-Stokes_16cce7e2f27_original-ratio.jpg" title="Ben Stokes"/>           
        
        <Story image="https://media1.popsugar-assets.com/files/thumbor/AeJR1OxEopk4_ZJ0jtzEgd7Vu0s/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2019/06/18/971/n/44701584/48162315d1438f6d_GettyImages-1030043682/i/Kiana-Madeira-aka-Moe-Truax-26.jpg" profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSndQiab5BYRFN9GeFlODLyVnDjEdjeW7HN1Q&usqp=CAU" title="Kiana Madeira"/>
        
        <Story image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTN_PASKWc6HLzz2zTFgsY2IxTdBz90HRScQw&usqp=CAU" profileSrc="https://img.particlenews.com/img/id/1gbD7B_0ORYRwhn00?type=thumbnail_1024x000" title="Quintessa Swindell"/>

        <Story image="https://cricketaddictor.com/wp-content/uploads/2019/12/kl-rahulllll.jpg" profileSrc="https://upload.wikimedia.org/wikipedia/commons/6/69/KL_Rahul_at_Femina_Miss_India_2018_Grand_Finale_%28cropped%29.jpg" title="KL Rahul"/>
        
        </div>
    )
}

export default StoryReel;
