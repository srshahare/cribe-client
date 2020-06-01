import React from 'react';
import './PageContent.css';
import TrendingBlogs from '../../trendings/TrendingBlogs';

import Grid from '@material-ui/core/Grid';

const PageContent = () => {
    return(
        <div className="BlogPageContent">
            <Grid container spacing={3}>
                <Grid item xs={8}>
                    <div className="BlogContent">
                    <p>Nisi officia elit voluptate commodo id occaecat in consectetur. Nulla ex ullamco commodo consequat velit exercitation tempor fugiat. Exercitation et consequat commodo non Lorem velit non nulla exercitation nostrud. Ea non aute ullamco anim qui ullamco incididunt irure est qui duis.

Id Lorem enim enim do minim minim laborum pariatur et cupidatat aute. Cillum magna cillum elit ullamco fugiat voluptate. Dolor exercitation velit incididunt incididunt proident nostrud sit. Nisi sit magna irure occaecat pariatur magna. Laborum in fugiat irure ipsum ex quis enim tempor ullamco id ex. Enim magna aute eu fugiat.

Culpa mollit aliquip eiusmod elit pariatur id exercitation. Enim reprehenderit labore do aute esse incididunt. Ad nostrud exercitation aute esse dolore eiusmod minim officia incididunt. Aliqua id eu non mollit laborum ex reprehenderit. Ullamco consequat in consequat voluptate fugiat ipsum deserunt proident voluptate ipsum ipsum. Magna sunt velit aliqua consequat id laboris enim excepteur culpa in consequat exercitation non nisi. Cillum eiusmod nostrud aliqua consectetur velit.

Commodo cillum anim ut fugiat nisi non labore non incididunt laborum et incididunt adipisicing commodo. Nulla cupidatat esse elit in. Consequat nulla ut elit occaecat. Magna nostrud in elit aliqua. Occaecat exercitation enim deserunt et ea nulla ea deserunt dolor. Quis ut laboris sint aliquip incididunt amet proident nulla tempor.

Nostrud amet amet tempor excepteur irure. Lorem do ex nisi dolore exercitation. Eu duis adipisicing veniam sit minim veniam ex consequat incididunt ea sint. Amet anim excepteur sunt adipisicing aliquip cupidatat reprehenderit cillum excepteur velit veniam nostrud. Occaecat est esse ad non excepteur aute. Proident consectetur pariatur consequat qui deserunt dolore excepteur laboris cupidatat magna eu cillum eu.

Dolor labore in laboris reprehenderit et proident velit ut. Amet laborum pariatur voluptate excepteur nostrud ipsum aliqua ut nisi deserunt ad nisi consequat voluptate. Esse commodo ipsum occaecat mollit nulla et. Quis est esse dolore reprehenderit cupidatat id cupidatat eu proident id reprehenderit anim dolor consectetur. Lorem tempor veniam ipsum dolore mollit labore minim nostrud Lorem sunt incididunt et nisi laborum. Commodo cupidatat consequat minim cillum dolor labore non culpa.

Duis mollit consequat enim tempor. Laboris culpa ipsum culpa eiusmod sit amet veniam. Est aliquip non ad eiusmod. Culpa esse consectetur quis minim labore ea eiusmod nisi in eiusmod ipsum fugiat. Aliquip do voluptate officia est aute non in dolor incididunt enim cupidatat sint do laboris. Duis et non sint qui fugiat ad.

Officia aliquip cupidatat consequat velit elit tempor veniam velit reprehenderit sunt. Qui culpa voluptate Lorem amet aliquip. Non nostrud id id voluptate enim commodo voluptate consequat. Laborum elit duis officia ea fugiat dolore culpa nostrud.

Minim aliqua sunt laborum quis dolor sunt. Do aliqua quis pariatur do aliqua ad. Veniam elit anim non ut ad. Aliquip laborum sit id quis. Irure elit pariatur est mollit amet tempor ut duis officia ad do occaecat occaecat.

Amet nisi commodo cillum magna minim quis ad veniam. Sit culpa ut elit mollit. Eu adipisicing ullamco aliqua do qui quis in. Irure velit irure do proident sit nulla enim non ipsum aute est non. Lorem ullamco duis nisi sunt culpa veniam esse.</p>
                </div>
                </Grid>
                <Grid item xs={4}>
                        <h3>Trending Blogs</h3>
                        <TrendingBlogs />
                </Grid>
            </Grid>
        </div>
    )
}

export default PageContent;