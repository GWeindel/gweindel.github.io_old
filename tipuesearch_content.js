var tipuesearch = {"pages":[{"title":"Introducing myself","text":"My name is Gabriel Weindel and I am a cognitive scientist currently working at Aix-Marseille Université in the Laboratoire de Psychologie Cognitive and Laboratoire de Neurosciences Cognitives. As a researcher my interest goes to the test and application of mathematical cognitive models to the general population or to populations with cognitive deficits. For a detailed summary of my curriculm see my CV","tags":"pages","url":"/introducing-myself","loc":"/introducing-myself"},{"title":"RunDMC in a jupyter notebook","text":"Sorry, it's not about how to invite runDMC rappers to feature your notebook, rather it is about using the package \"dynamic models of choice\" ( runDMC ), to fit decision making models to your behavioral (and physiological) data within the environment of Jupyter. Why you ask ? Well, I'm allergic to development environment such as Rstudio or Rmarkdown as they are, to me, not practical enough when it comes to explore your data or your analysis pipeline while keeping a record of everythin. For that I prefer the jupyter environment but installing R and it's packages can be tricky, especially with complex architectures such as the one required by runDMC. Therefore I wrote this short tutorial in case others want to use the ability of jupyter but still rely on runDMC to do your decision data anaysis. We we'll be using conda, if you do not arleady have anaconda installed download the latest version at anaconda.com . First we will ensure that packages from conda are downloaded from the conda-forge repositories that has a larger collection of packages than default conda repositories. For that, in a terminal (for linux and Mac users) or using the anaconda prompt (for windows) launch the following command : conda config --add channels conda-forge conda config --set channel_priority strict Then we will simultaneously create a new environment called \"DMC\" with the available and required packages from conda-forge : conda create -n DMC r-loo r-hypergeo r-statmod r-pracma r-snowfall r-numDeriv r-vioplot r-ggplot2 r-gridExtra r-truncdist r-msm r-rlecuyer r-laplacesdemon r-mvtnorm r-matrix jupyter #That will take a while However a few of the required packages are not contained in the conda forge rep (rtdists, stringr, Brobdingnag) . We therefore have to launch an R session in the DMC environment to install them afterwards. For that first launch an R session by previously activating our new conda env : conda activate DMC R install.packages(\"Brobdingnag\") # This will prompt a screen requiring to select a server from which you will download, just select the nearest one install.packages(\"stringr\") install.packages(\"rtdists\") Then we will install a modified version of the coda package that allows for plotting of priors with plot.dmc. For that download the zip file from the latest DMC version , extract it in a relevant path and then move to that working directory within the R session, in my case and for the version 190819 it goes as follows : setwd(\"~/DMC_190819\") And install the coda package : install.packages(\"packages/coda_0.19-3.tar.gz\",repos=NULL,type=\"source\") Then R and jupyter packages are not interfacing very well you need a last step to provide jupyter with the relevant locations for the R package : install.packages('IRkernel') IRkernel::installspec() Et voilà ! You're ready to go and use runDMC and the associated tutorials :) Let me know in case you run into troubles.","tags":"posts","url":"/rundmc-in-a-jupyter-notebook","loc":"/rundmc-in-a-jupyter-notebook"},{"title":"Lecture on Linear Mixed Models","text":"Introduction This is a series of lectures I gave to doctoral students in psychology and neuroscience at Aix-Marseille Université in April 2021. The course aimed at giving enough information and examples about mixed models to allow students to think about how they can apply such models to their data. All the course is intended to be \"hands-on\" and therefore the R code is provided with reproducible examples (mainly simulations). The code is meant to be accessible to beginners so it remains simple and redundant (and... I'm a python user so I don't get all the tidyverse things for now). All the content of the slides can be recreated as an interactive jupyter notebook where you can easily live code inside the presentation thanks to the RISE python package. If you're interested in replicating this lecture take a look at the root repository (https://github.com/GWeindel/lecture_mixed_models_AMU_2021) with all the instructions. Content of the course : Module 1 The first module is dedicated to linear models both as a reminder and to extend students knowledge on what can be done using linear models (prediction, factor recoding, etc.) The presentation can be found here (best to open in a separate tab and to navigate across slides with the space bar) Module 2 The second module introduces the core aspect of linear mixed models in a frequentist context and using the '''lme4''' R package. We start by illustrating the concept of maximum likelihood, hierarchies in the data and how to account for these hierarchies. The presentation can be found here Module 3 The last module introduces Bayesian estimation and generalized linear mixed models. The aim is to give students clues to understand these models fitted in a Bayesian context rather than being exhaustive, I conclude with a series of resources for those who want to go further in the learning of regression models and Bayesian estimation. The presentation can be found here","tags":"posts","url":"/lecture-on-linear-mixed-models","loc":"/lecture-on-linear-mixed-models"},{"title":"PhD","text":"Hi everyone, I had my PhD defense last month and I'm happy to share with you the manuscript that can be found on thesis commons . Along with the manuscript there is also an associated OSF project page where you can find most of the code used for the analysis in the PhD manuscript, some data is still missing but will be uploaded when the chapters get published. There is also a live recording of the presentation available : Cheers !","tags":"posts","url":"/phd","loc":"/phd"}]};