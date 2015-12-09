



<!DOCTYPE html>
<html lang="en" class=" is-copy-enabled">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=1020">
    
    
    <title>jquery/CONTRIBUTING.md at master · jquery/jquery</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="jquery/jquery" name="twitter:title" /><meta content="jquery - jQuery JavaScript Library" name="twitter:description" /><meta content="https://avatars0.githubusercontent.com/u/70142?v=3&amp;s=400" name="twitter:image:src" />
      <meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars0.githubusercontent.com/u/70142?v=3&amp;s=400" property="og:image" /><meta content="jquery/jquery" property="og:title" /><meta content="https://github.com/jquery/jquery" property="og:url" /><meta content="jquery - jQuery JavaScript Library" property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="web-socket" href="wss://live.github.com/_sockets/MTIwNzQ1ODI6NDA5OGE5MzY0ZWQwNDQ2NGM1ZjlmMWYyMmY2YTdhNzg6NzU1NTA3Mjg3Mzk0MDkwYjA4ODliMmI2YTk4MjYxYjZmYWU0Nzg2ZTdmZjI0NjkyZDM1ZTJkYzQwM2NlYjk0ZA==--666c704bfff133e78aaeed4878aa7d916638ac1c">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="68FE5AEB:2F45:3DE06B9:56683F77" name="octolytics-dimension-request_id" /><meta content="12074582" name="octolytics-actor-id" /><meta content="Hadrien-Segeral" name="octolytics-actor-login" /><meta content="134afc197b8a2cc57df241baf4b08eebea66d56eb0d1d7c575bb7249b08ede49" name="octolytics-actor-hash" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />
<meta content="Rails, view, blob#show" data-pjax-transient="true" name="analytics-event" />


  <meta class="js-ga-set" name="dimension1" content="Logged In">



        <meta name="hostname" content="github.com">
    <meta name="user-login" content="Hadrien-Segeral">

        <meta name="expected-hostname" content="github.com">

      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta content="485ce5b0c0cb1da56b3bc467590ce5fc68525de6" name="form-nonce" />

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-e22d623d751b610e17d11f367d278f39da959fc110f2fce97536b485292df111.css" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github2-437a4328e52a95ed09a1fa29276622738971546748cbd528b4f1bd3a5462d981.css" media="all" rel="stylesheet" />
    
    
    


    <meta http-equiv="x-pjax-version" content="936c52b5fe122be85732f548899c81e9">

      
  <meta name="description" content="jquery - jQuery JavaScript Library">
  <meta name="go-import" content="github.com/jquery/jquery git https://github.com/jquery/jquery.git">

  <meta content="70142" name="octolytics-dimension-user_id" /><meta content="jquery" name="octolytics-dimension-user_login" /><meta content="167174" name="octolytics-dimension-repository_id" /><meta content="jquery/jquery" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="167174" name="octolytics-dimension-repository_network_root_id" /><meta content="jquery/jquery" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/jquery/jquery/commits/master.atom" rel="alternate" title="Recent Commits to jquery:master" type="application/atom+xml">

  </head>


  <body class="logged_in   env-production windows vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    



      <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


      <div class="site-search repo-scope js-site-search" role="search">
          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/jquery/jquery/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/jquery/jquery/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <label class="js-chromeless-input-container form-control">
    <div class="scope-badge">This repository</div>
    <input type="text"
      class="js-site-search-focus js-site-search-field is-clearable chromeless-input"
      data-hotkey="s"
      name="q"
      placeholder="Search"
      aria-label="Search this repository"
      data-global-scope-placeholder="Search GitHub"
      data-repo-scope-placeholder="Search"
      tabindex="1"
      autocapitalize="off">
  </label>
</form>
      </div>

      <ul class="header-nav left" role="navigation">
        <li class="header-nav-item">
          <a href="/pulls" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:pulls context:user" data-hotkey="g p" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls">
            Pull requests
</a>        </li>
        <li class="header-nav-item">
          <a href="/issues" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:issues context:user" data-hotkey="g i" data-selected-links="/issues /issues/assigned /issues/mentioned /issues">
            Issues
</a>        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com/" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item">
      <span class="js-socket-channel js-updatable-content"
        data-channel="notification-changed:Hadrien-Segeral"
        data-url="/notifications/header">
      <a href="/notifications" aria-label="You have no unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s" data-ga-click="Header, go to notifications, icon:read" data-hotkey="g n">
          <span class="mail-status all-read"></span>
          <span class="octicon octicon-bell"></span>
</a>  </span>

  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link tooltipped tooltipped-s js-menu-target" href="/new"
       aria-label="Create new…"
       data-ga-click="Header, create new, icon:add">
      <span class="octicon octicon-plus left"></span>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>


  <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="jquery/jquery">This repository</span>
  </div>
    <a class="dropdown-item" href="/jquery/jquery/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>

      </ul>
    </div>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name tooltipped tooltipped-sw js-menu-target" href="/Hadrien-Segeral"
       aria-label="View profile and more"
       data-ga-click="Header, show menu, icon:avatar">
      <img alt="@Hadrien-Segeral" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/12074582?v=3&amp;s=40" width="20" />
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <div class="dropdown-menu  dropdown-menu-sw">
        <div class=" dropdown-header header-nav-current-user css-truncate">
            Signed in as <strong class="css-truncate-target">Hadrien-Segeral</strong>

        </div>


        <div class="dropdown-divider"></div>

          <a class="dropdown-item" href="/Hadrien-Segeral" data-ga-click="Header, go to profile, text:your profile">
            Your profile
          </a>
        <a class="dropdown-item" href="/stars" data-ga-click="Header, go to starred repos, text:your stars">
          Your stars
        </a>
        <a class="dropdown-item" href="/explore" data-ga-click="Header, go to explore, text:explore">
          Explore
        </a>
          <a class="dropdown-item" href="/integrations" data-ga-click="Header, go to integrations, text:integrations">
            Integrations
          </a>
        <a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
          Help
        </a>

          <div class="dropdown-divider"></div>

          <a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
            Settings
          </a>

          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/logout" class="logout-form" data-form-nonce="485ce5b0c0cb1da56b3bc467590ce5fc68525de6" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="E99XwaXFnuej+fKw9ip0u5YH9BJJMCFIQjP8AYLummGfx5rngv5BpAQ//d/fdD2/5o4A4sLawSbrPWnUhMdbqQ==" /></div>
            <button class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
              Sign out
            </button>
</form>
      </div>
    </div>
  </li>
</ul>


    
  </div>
</div>

      

      


    <div id="start-of-content" class="accessibility-aid"></div>

      <div id="js-flash-container">
</div>


    <div role="main" class="main-content">
        <div itemscope itemtype="http://schema.org/WebPage">
    <div id="js-repo-pjax-container" class="context-loader-container js-repo-nav-next" data-pjax-container>
      
<div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
  <div class="container repohead-details-container">

    

<ul class="pagehead-actions">

  <li>
        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-form-nonce="485ce5b0c0cb1da56b3bc467590ce5fc68525de6" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="iit/8MwX5LQw+PR9Y1kndmNThAHSDWiiv4PMyviJZqNFk1f/tH9dBS40vLKpLFfBttO8mFJ27l8S305eh91tVA==" /></div>      <input id="repository_id" name="repository_id" type="hidden" value="167174" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/jquery/jquery/subscription"
            class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true"
            data-ga-click="Repository, click Watch settings, action:blob#show">
            <span class="js-select-button">
              <span class="octicon octicon-eye"></span>
              Watch
            </span>
          </a>
          <a class="social-count js-social-count" href="/jquery/jquery/watchers">
            3,079
          </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header">
              <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
              <span class="select-menu-title">Notifications</span>
            </div>

              <div class="select-menu-list js-navigation-container" role="menu">

                <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <div class="select-menu-item-text">
                    <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                    <span class="select-menu-item-heading">Not watching</span>
                    <span class="description">Be notified when participating or @mentioned.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <span class="octicon octicon-eye"></span>
                      Watch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <span class="select-menu-item-icon octicon octicon octicon-check"></span>
                  <div class="select-menu-item-text">
                    <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                    <span class="select-menu-item-heading">Watching</span>
                    <span class="description">Be notified of all conversations.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <span class="octicon octicon-eye"></span>
                      Unwatch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <div class="select-menu-item-text">
                    <input id="do_ignore" name="do" type="radio" value="ignore" />
                    <span class="select-menu-item-heading">Ignoring</span>
                    <span class="description">Never be notified.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <span class="octicon octicon-mute"></span>
                      Stop ignoring
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/jquery/jquery/unstar" class="js-toggler-form starred js-unstar-button" data-form-nonce="485ce5b0c0cb1da56b3bc467590ce5fc68525de6" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="f56WRKobsr8dAEXkFr1yJiHmWdcXwJDi9nhIpDTNcfb9QlSFV3ctShIlRzRjYdAs1Lss09U1zQyhdXvk/2h61A==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar jquery/jquery"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/jquery/jquery/stargazers">
          37,050
        </a>
</form>
    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/jquery/jquery/star" class="js-toggler-form unstarred js-star-button" data-form-nonce="485ce5b0c0cb1da56b3bc467590ce5fc68525de6" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="qg/JoiLjipkzUbERe9ab1Ou7AZhE/OqEc0mFXi9DRC/EP558qXbPglxs/1N/J9W48PL0O+bt8XEMR1cGAs7EcQ==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star jquery/jquery"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/jquery/jquery/stargazers">
          37,050
        </a>
</form>  </div>

  </li>

  <li>
          <a href="#fork-destination-box" class="btn btn-sm btn-with-count"
              title="Fork your own copy of jquery/jquery to your account"
              aria-label="Fork your own copy of jquery/jquery to your account"
              rel="facebox"
              data-ga-click="Repository, show fork modal, action:blob#show; text:Fork">
            <span class="octicon octicon-repo-forked"></span>
            Fork
          </a>

          <div id="fork-destination-box" style="display: none;">
            <h2 class="facebox-header" data-facebox-id="facebox-header">Where should we fork this repository?</h2>
            <include-fragment src=""
                class="js-fork-select-fragment fork-select-fragment"
                data-url="/jquery/jquery/fork?fragment=1">
              <img alt="Loading" height="64" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-128.gif" width="64" />
            </include-fragment>
          </div>

    <a href="/jquery/jquery/network" class="social-count">
      9,622
    </a>
  </li>
</ul>

    <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public ">
  <span class="octicon octicon-repo"></span>
  <span class="author"><a href="/jquery" class="url fn" itemprop="url" rel="author"><span itemprop="title">jquery</span></a></span><!--
--><span class="path-divider">/</span><!--
--><strong><a href="/jquery/jquery" data-pjax="#js-repo-pjax-container">jquery</a></strong>

  <span class="page-context-loader">
    <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
  </span>

</h1>

  </div>
  <div class="container">
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <a href="/jquery/jquery" aria-label="Code" aria-selected="true" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /jquery/jquery">
    <span class="octicon octicon-code"></span>
    Code
</a>
    <a href="/jquery/jquery/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /jquery/jquery/issues">
      <span class="octicon octicon-issue-opened"></span>
      Issues
      <span class="counter">62</span>
</a>
  <a href="/jquery/jquery/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /jquery/jquery/pulls">
    <span class="octicon octicon-git-pull-request"></span>
    Pull requests
    <span class="counter">8</span>
</a>
    <a href="/jquery/jquery/wiki" class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /jquery/jquery/wiki">
      <span class="octicon octicon-book"></span>
      Wiki
</a>
  <a href="/jquery/jquery/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /jquery/jquery/pulse">
    <span class="octicon octicon-pulse"></span>
    Pulse
</a>
  <a href="/jquery/jquery/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /jquery/jquery/graphs">
    <span class="octicon octicon-graph"></span>
    Graphs
</a>

</nav>

  </div>
</div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    

<a href="/jquery/jquery/blob/1823a715660a5f31dd7e05672e9ad020066256a9/CONTRIBUTING.md" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:c3dc12052825cbe0cdabd323177e2fe4 -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu js-menu-container js-select-menu left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    title="master"
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jquery/jquery/blob/1.12-stable/CONTRIBUTING.md"
               data-name="1.12-stable"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="1.12-stable">
                1.12-stable
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jquery/jquery/blob/2.2-stable/CONTRIBUTING.md"
               data-name="2.2-stable"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="2.2-stable">
                2.2-stable
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jquery/jquery/blob/compat/CONTRIBUTING.md"
               data-name="compat"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="compat">
                compat
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jquery/jquery/blob/killphp/CONTRIBUTING.md"
               data-name="killphp"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="killphp">
                killphp
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/jquery/jquery/blob/master/CONTRIBUTING.md"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="master">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/3.0.0-alpha1/CONTRIBUTING.md"
                 data-name="3.0.0-alpha1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="3.0.0-alpha1">3.0.0-alpha1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/3.0.0-alpha1+compat/CONTRIBUTING.md"
                 data-name="3.0.0-alpha1+compat"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="3.0.0-alpha1+compat">3.0.0-alpha1+compat</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/2.1.4/CONTRIBUTING.md"
                 data-name="2.1.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.1.4">2.1.4</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/2.1.3/CONTRIBUTING.md"
                 data-name="2.1.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.1.3">2.1.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/2.1.2/CONTRIBUTING.md"
                 data-name="2.1.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.1.2">2.1.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/2.1.1/CONTRIBUTING.md"
                 data-name="2.1.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.1.1">2.1.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/2.1.1-rc2/CONTRIBUTING.md"
                 data-name="2.1.1-rc2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.1.1-rc2">2.1.1-rc2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/2.1.1-rc1/CONTRIBUTING.md"
                 data-name="2.1.1-rc1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.1.1-rc1">2.1.1-rc1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/2.1.1-beta1/CONTRIBUTING.md"
                 data-name="2.1.1-beta1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.1.1-beta1">2.1.1-beta1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/2.1.0/CONTRIBUTING.md"
                 data-name="2.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.1.0">2.1.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/2.1.0-rc1/CONTRIBUTING.md"
                 data-name="2.1.0-rc1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.1.0-rc1">2.1.0-rc1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/2.1.0-beta3/CONTRIBUTING.md"
                 data-name="2.1.0-beta3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.1.0-beta3">2.1.0-beta3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/2.1.0-beta2/CONTRIBUTING.md"
                 data-name="2.1.0-beta2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.1.0-beta2">2.1.0-beta2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/2.1.0-beta1/CONTRIBUTING.md"
                 data-name="2.1.0-beta1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.1.0-beta1">2.1.0-beta1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/2.0.3/CONTRIBUTING.md"
                 data-name="2.0.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.0.3">2.0.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/2.0.2/CONTRIBUTING.md"
                 data-name="2.0.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.0.2">2.0.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/2.0.1/CONTRIBUTING.md"
                 data-name="2.0.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.0.1">2.0.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/2.0.0/CONTRIBUTING.md"
                 data-name="2.0.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.0.0">2.0.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/2.0.0b2/CONTRIBUTING.md"
                 data-name="2.0.0b2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.0.0b2">2.0.0b2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/2.0.0b1/CONTRIBUTING.md"
                 data-name="2.0.0b1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.0.0b1">2.0.0b1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/2.0.0-beta3/CONTRIBUTING.md"
                 data-name="2.0.0-beta3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.0.0-beta3">2.0.0-beta3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.11.3/CONTRIBUTING.md"
                 data-name="1.11.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.11.3">1.11.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.11.2/CONTRIBUTING.md"
                 data-name="1.11.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.11.2">1.11.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.11.1/CONTRIBUTING.md"
                 data-name="1.11.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.11.1">1.11.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.11.1-rc2/CONTRIBUTING.md"
                 data-name="1.11.1-rc2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.11.1-rc2">1.11.1-rc2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.11.1-rc1/CONTRIBUTING.md"
                 data-name="1.11.1-rc1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.11.1-rc1">1.11.1-rc1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.11.1-beta1/CONTRIBUTING.md"
                 data-name="1.11.1-beta1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.11.1-beta1">1.11.1-beta1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.11.0/CONTRIBUTING.md"
                 data-name="1.11.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.11.0">1.11.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.11.0-rc1/CONTRIBUTING.md"
                 data-name="1.11.0-rc1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.11.0-rc1">1.11.0-rc1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.11.0-beta3/CONTRIBUTING.md"
                 data-name="1.11.0-beta3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.11.0-beta3">1.11.0-beta3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.11.0-beta2/CONTRIBUTING.md"
                 data-name="1.11.0-beta2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.11.0-beta2">1.11.0-beta2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.11.0-beta1/CONTRIBUTING.md"
                 data-name="1.11.0-beta1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.11.0-beta1">1.11.0-beta1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.10.2/CONTRIBUTING.md"
                 data-name="1.10.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.10.2">1.10.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.10.1/CONTRIBUTING.md"
                 data-name="1.10.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.10.1">1.10.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.10.0/CONTRIBUTING.md"
                 data-name="1.10.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.10.0">1.10.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.10.0-beta1/CONTRIBUTING.md"
                 data-name="1.10.0-beta1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.10.0-beta1">1.10.0-beta1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.9.1/CONTRIBUTING.md"
                 data-name="1.9.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.9.1">1.9.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.9.0/CONTRIBUTING.md"
                 data-name="1.9.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.9.0">1.9.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.9.0rc1/CONTRIBUTING.md"
                 data-name="1.9.0rc1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.9.0rc1">1.9.0rc1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.9.0b1/CONTRIBUTING.md"
                 data-name="1.9.0b1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.9.0b1">1.9.0b1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.8.3+1/CONTRIBUTING.md"
                 data-name="1.8.3+1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.8.3+1">1.8.3+1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.8.3/CONTRIBUTING.md"
                 data-name="1.8.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.8.3">1.8.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.8.2/CONTRIBUTING.md"
                 data-name="1.8.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.8.2">1.8.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.8.1/CONTRIBUTING.md"
                 data-name="1.8.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.8.1">1.8.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.8.0/CONTRIBUTING.md"
                 data-name="1.8.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.8.0">1.8.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.8rc1/CONTRIBUTING.md"
                 data-name="1.8rc1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.8rc1">1.8rc1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.8b2/CONTRIBUTING.md"
                 data-name="1.8b2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.8b2">1.8b2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.8b1/CONTRIBUTING.md"
                 data-name="1.8b1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.8b1">1.8b1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.7.2/CONTRIBUTING.md"
                 data-name="1.7.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.7.2">1.7.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.7.2rc1/CONTRIBUTING.md"
                 data-name="1.7.2rc1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.7.2rc1">1.7.2rc1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.7.2b1/CONTRIBUTING.md"
                 data-name="1.7.2b1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.7.2b1">1.7.2b1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.7.1/CONTRIBUTING.md"
                 data-name="1.7.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.7.1">1.7.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.7.1rc1/CONTRIBUTING.md"
                 data-name="1.7.1rc1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.7.1rc1">1.7.1rc1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.7.0/CONTRIBUTING.md"
                 data-name="1.7.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.7.0">1.7.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.7/CONTRIBUTING.md"
                 data-name="1.7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.7">1.7</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.7rc2/CONTRIBUTING.md"
                 data-name="1.7rc2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.7rc2">1.7rc2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.7rc1/CONTRIBUTING.md"
                 data-name="1.7rc1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.7rc1">1.7rc1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.7b2/CONTRIBUTING.md"
                 data-name="1.7b2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.7b2">1.7b2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.7b1/CONTRIBUTING.md"
                 data-name="1.7b1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.7b1">1.7b1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.6.4/CONTRIBUTING.md"
                 data-name="1.6.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.6.4">1.6.4</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.6.4rc1/CONTRIBUTING.md"
                 data-name="1.6.4rc1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.6.4rc1">1.6.4rc1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.6.3/CONTRIBUTING.md"
                 data-name="1.6.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.6.3">1.6.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.6.3rc1/CONTRIBUTING.md"
                 data-name="1.6.3rc1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.6.3rc1">1.6.3rc1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.6.2/CONTRIBUTING.md"
                 data-name="1.6.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.6.2">1.6.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.6.2rc1/CONTRIBUTING.md"
                 data-name="1.6.2rc1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.6.2rc1">1.6.2rc1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.6.1/CONTRIBUTING.md"
                 data-name="1.6.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.6.1">1.6.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.6.1rc1/CONTRIBUTING.md"
                 data-name="1.6.1rc1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.6.1rc1">1.6.1rc1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.6.0/CONTRIBUTING.md"
                 data-name="1.6.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.6.0">1.6.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.6/CONTRIBUTING.md"
                 data-name="1.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.6">1.6</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.6rc1/CONTRIBUTING.md"
                 data-name="1.6rc1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.6rc1">1.6rc1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.6b1/CONTRIBUTING.md"
                 data-name="1.6b1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.6b1">1.6b1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.5.2/CONTRIBUTING.md"
                 data-name="1.5.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.5.2">1.5.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.5.2rc1/CONTRIBUTING.md"
                 data-name="1.5.2rc1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.5.2rc1">1.5.2rc1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.5.1/CONTRIBUTING.md"
                 data-name="1.5.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.5.1">1.5.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.5.1rc1/CONTRIBUTING.md"
                 data-name="1.5.1rc1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.5.1rc1">1.5.1rc1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.5.0/CONTRIBUTING.md"
                 data-name="1.5.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.5.0">1.5.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.5/CONTRIBUTING.md"
                 data-name="1.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.5">1.5</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.5rc1/CONTRIBUTING.md"
                 data-name="1.5rc1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.5rc1">1.5rc1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.5b1/CONTRIBUTING.md"
                 data-name="1.5b1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.5b1">1.5b1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.4.4/CONTRIBUTING.md"
                 data-name="1.4.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.4.4">1.4.4</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.4.4rc3/CONTRIBUTING.md"
                 data-name="1.4.4rc3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.4.4rc3">1.4.4rc3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.4.4rc2/CONTRIBUTING.md"
                 data-name="1.4.4rc2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.4.4rc2">1.4.4rc2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.4.4rc1/CONTRIBUTING.md"
                 data-name="1.4.4rc1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.4.4rc1">1.4.4rc1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.4.3/CONTRIBUTING.md"
                 data-name="1.4.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.4.3">1.4.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.4.3rc2/CONTRIBUTING.md"
                 data-name="1.4.3rc2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.4.3rc2">1.4.3rc2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.4.3rc1/CONTRIBUTING.md"
                 data-name="1.4.3rc1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.4.3rc1">1.4.3rc1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.4.2/CONTRIBUTING.md"
                 data-name="1.4.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.4.2">1.4.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.4.1/CONTRIBUTING.md"
                 data-name="1.4.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.4.1">1.4.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.4.0/CONTRIBUTING.md"
                 data-name="1.4.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.4.0">1.4.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.4/CONTRIBUTING.md"
                 data-name="1.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.4">1.4</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.4rc1/CONTRIBUTING.md"
                 data-name="1.4rc1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.4rc1">1.4rc1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.4a2/CONTRIBUTING.md"
                 data-name="1.4a2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.4a2">1.4a2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.4a1/CONTRIBUTING.md"
                 data-name="1.4a1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.4a1">1.4a1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.3.2/CONTRIBUTING.md"
                 data-name="1.3.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.3.2">1.3.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.3.1/CONTRIBUTING.md"
                 data-name="1.3.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.3.1">1.3.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.3.1rc1/CONTRIBUTING.md"
                 data-name="1.3.1rc1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.3.1rc1">1.3.1rc1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.3.0/CONTRIBUTING.md"
                 data-name="1.3.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.3.0">1.3.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.3/CONTRIBUTING.md"
                 data-name="1.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.3">1.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.3rc1/CONTRIBUTING.md"
                 data-name="1.3rc1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.3rc1">1.3rc1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery/jquery/tree/1.3b2/CONTRIBUTING.md"
                 data-name="1.3b2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.3b2">1.3b2</a>
            </div>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="btn-group right">
    <a href="/jquery/jquery/find/master"
          class="js-show-file-finder btn btn-sm"
          data-pjax
          data-hotkey="t">
      Find file
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
  </div>
  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/jquery/jquery" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">jquery</span></a></span></span><span class="separator">/</span><strong class="final-path">CONTRIBUTING.md</strong>
  </div>
</div>


  <div class="commit-tease">
      <span class="right">
        <a class="commit-tease-sha" href="/jquery/jquery/commit/e0c25abb435db6e210d00407af2ba40e5f0b56ad" data-pjax>
          e0c25ab
        </a>
        <time datetime="2015-11-17T20:18:58Z" is="relative-time">Nov 17, 2015</time>
      </span>
      <div>
        <img alt="@timmywil" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/192451?v=3&amp;s=40" width="20" />
        <a href="/timmywil" class="user-mention" rel="contributor">timmywil</a>
          <a href="/jquery/jquery/commit/e0c25abb435db6e210d00407af2ba40e5f0b56ad" class="message" data-pjax="true" title="Docs: add a note about loading source with AMD

- Moves the note about the watch task and the note about
  loading with AMD to their own section under
  &quot;Test Suite Tips&quot;

Fixes gh-2714
Close gh-2725">Docs: add a note about loading source with AMD</a>
      </div>

    <div class="commit-tease-contributors">
      <a class="muted-link contributors-toggle" href="#blob_contributors_box" rel="facebox">
        <strong>9</strong>
         contributors
      </a>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="rwaldron" href="/jquery/jquery/commits/master/CONTRIBUTING.md?author=rwaldron"><img alt="@rwaldron" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/27985?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="mzgol" href="/jquery/jquery/commits/master/CONTRIBUTING.md?author=mzgol"><img alt="@mzgol" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/1758366?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="timmywil" href="/jquery/jquery/commits/master/CONTRIBUTING.md?author=timmywil"><img alt="@timmywil" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/192451?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="dmethvin" href="/jquery/jquery/commits/master/CONTRIBUTING.md?author=dmethvin"><img alt="@dmethvin" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/157858?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="tricknotes" href="/jquery/jquery/commits/master/CONTRIBUTING.md?author=tricknotes"><img alt="@tricknotes" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/290782?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="scottgonzalez" href="/jquery/jquery/commits/master/CONTRIBUTING.md?author=scottgonzalez"><img alt="@scottgonzalez" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/141167?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="arthurvr" href="/jquery/jquery/commits/master/CONTRIBUTING.md?author=arthurvr"><img alt="@arthurvr" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/6025224?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="callumacrae" href="/jquery/jquery/commits/master/CONTRIBUTING.md?author=callumacrae"><img alt="@callumacrae" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/472830?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="amitmerchant1990" href="/jquery/jquery/commits/master/CONTRIBUTING.md?author=amitmerchant1990"><img alt="@amitmerchant1990" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/3647841?v=3&amp;s=40" width="20" /> </a>


    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@rwaldron" height="24" src="https://avatars1.githubusercontent.com/u/27985?v=3&amp;s=48" width="24" />
            <a href="/rwaldron">rwaldron</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@mzgol" height="24" src="https://avatars2.githubusercontent.com/u/1758366?v=3&amp;s=48" width="24" />
            <a href="/mzgol">mzgol</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@timmywil" height="24" src="https://avatars2.githubusercontent.com/u/192451?v=3&amp;s=48" width="24" />
            <a href="/timmywil">timmywil</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@dmethvin" height="24" src="https://avatars3.githubusercontent.com/u/157858?v=3&amp;s=48" width="24" />
            <a href="/dmethvin">dmethvin</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@tricknotes" height="24" src="https://avatars0.githubusercontent.com/u/290782?v=3&amp;s=48" width="24" />
            <a href="/tricknotes">tricknotes</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@scottgonzalez" height="24" src="https://avatars1.githubusercontent.com/u/141167?v=3&amp;s=48" width="24" />
            <a href="/scottgonzalez">scottgonzalez</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@arthurvr" height="24" src="https://avatars3.githubusercontent.com/u/6025224?v=3&amp;s=48" width="24" />
            <a href="/arthurvr">arthurvr</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@callumacrae" height="24" src="https://avatars1.githubusercontent.com/u/472830?v=3&amp;s=48" width="24" />
            <a href="/callumacrae">callumacrae</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@amitmerchant1990" height="24" src="https://avatars0.githubusercontent.com/u/3647841?v=3&amp;s=48" width="24" />
            <a href="/amitmerchant1990">amitmerchant1990</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="btn-group">
      <a href="/jquery/jquery/raw/master/CONTRIBUTING.md" class="btn btn-sm " id="raw-url">Raw</a>
        <a href="/jquery/jquery/blame/master/CONTRIBUTING.md" class="btn btn-sm js-update-url-with-hash">Blame</a>
      <a href="/jquery/jquery/commits/master/CONTRIBUTING.md" class="btn btn-sm " rel="nofollow">History</a>
    </div>

        <a class="octicon-btn tooltipped tooltipped-nw"
           href="https://windows.github.com"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <span class="octicon octicon-device-desktop"></span>
        </a>

        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/jquery/jquery/edit/master/CONTRIBUTING.md" class="inline-form js-update-url-with-hash" data-form-nonce="485ce5b0c0cb1da56b3bc467590ce5fc68525de6" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="s8YQOCeBo8qp0aIgFtwMU4l8DaJoBbGPguxaMvJ/maTowb1T9G4J2+Zd5D8bd+7WoMcQxnVREJuZTqreYoaHpQ==" /></div>
          <button class="octicon-btn tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
            <span class="octicon octicon-pencil"></span>
          </button>
</form>        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/jquery/jquery/delete/master/CONTRIBUTING.md" class="inline-form" data-form-nonce="485ce5b0c0cb1da56b3bc467590ce5fc68525de6" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="NUXj8Lbz72o8XO7P4UJH2GScjtZ+1pw8fccDkw1RU9JdUaLzMo8g2MN0rgHSooGcY7uTYUVfNzpEmV52SDP35A==" /></div>
          <button class="octicon-btn octicon-btn-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and delete the file" data-disable-with>
            <span class="octicon octicon-trashcan"></span>
          </button>
</form>  </div>

  <div class="file-info">
      140 lines (77 sloc)
      <span class="file-info-divider"></span>
    7.16 KB
  </div>
</div>

  
  <div id="readme" class="blob instapaper_body">
    <article class="markdown-body entry-content" itemprop="mainContentOfPage"><h1><a id="user-content-contributing-to-jquery" class="anchor" href="#contributing-to-jquery" aria-hidden="true"><span class="octicon octicon-link"></span></a>Contributing to jQuery</h1>

<ol>
<li><a href="#getting-involved">Getting Involved</a></li>
<li><a href="#questions-and-discussion">Questions and Discussion</a></li>
<li><a href="#how-to-report-bugs">How To Report Bugs</a></li>
<li><a href="#tips-for-bug-patching">Tips for Bug Patching</a></li>
</ol>

<p>Note: This is the code development repository for <em>jQuery Core</em> only. Before opening an issue or making a pull request, be sure you're in the right place.</p>

<ul>
<li>jQuery plugin issues should be reported to the author of the plugin.</li>
<li>jQuery Core API documentation issues can be filed <a href="http://github.com/jquery/api.jquery.com/issues">at the API repo</a>.</li>
<li>Bugs or suggestions for other jQuery Foundation projects should be filed in <a href="http://github.com/jquery/">their respective repos</a>.</li>
</ul>

<h2><a id="user-content-getting-involved" class="anchor" href="#getting-involved" aria-hidden="true"><span class="octicon octicon-link"></span></a>Getting Involved</h2>

<p>We've put together <a href="http://contribute.jquery.org/open-source/">a short guide with tips, tricks, and ideas on getting started</a>. We're always looking for help identifying bugs, writing and reducing test cases, and documentation.</p>

<p>More information on how to contribute to this and other jQuery Foundation projects is at <a href="http://contribute.jquery.org">contribute.jquery.org</a>. Please review our <a href="http://contribute.jquery.org/commits-and-pull-requests/">commit &amp; pull request guide</a> and <a href="http://contribute.jquery.org/style-guide/">style guides</a> for instructions on how to maintain a fork and submit patches. Before we can merge any pull request, we'll also need you to sign our <a href="http://contribute.jquery.org/cla/">contributor license agreement</a>.</p>

<h2><a id="user-content-questions-and-discussion" class="anchor" href="#questions-and-discussion" aria-hidden="true"><span class="octicon octicon-link"></span></a>Questions and Discussion</h2>

<h3><a id="user-content-forum-and-irc" class="anchor" href="#forum-and-irc" aria-hidden="true"><span class="octicon octicon-link"></span></a>Forum and IRC</h3>

<p>jQuery is so popular that many developers have knowledge of its capabilities and limitations. Most questions about using jQuery can be answered on popular forums such as <a href="http://stackoverflow.com">Stack Overflow</a>. Please start there when you have questions, even if you think you've found a bug.</p>

<p>The jQuery Core team watches the <a href="http://forum.jquery.com/developing-jquery-core">jQuery Development Forum</a>. If you have longer posts or questions that can't be answered in places such as Stack Overflow, please feel free to post them there. If you think you've found a bug, please <a href="#how-to-report-bugs">file it in the bug tracker</a>. The Core team can be found in the <a href="http://webchat.freenode.net/?channels=jquery-dev">#jquery-dev</a> IRC channel on irc.freenode.net.</p>

<h3><a id="user-content-weekly-status-meetings" class="anchor" href="#weekly-status-meetings" aria-hidden="true"><span class="octicon octicon-link"></span></a>Weekly Status Meetings</h3>

<p>The jQuery Core team has a weekly meeting to discuss the progress of current work. The meeting is held in the <a href="http://webchat.freenode.net/?channels=jquery-meeting">#jquery-meeting</a> IRC channel on irc.freenode.net at <a href="http://www.timeanddate.com/worldclock/fixedtime.html?month=1&amp;day=17&amp;year=2011&amp;hour=12&amp;min=0&amp;sec=0&amp;p1=43">Noon EST</a> on Mondays.</p>

<p><a href="http://meetings.jquery.org/category/core/">jQuery Core Meeting Notes</a></p>

<h2><a id="user-content-how-to-report-bugs" class="anchor" href="#how-to-report-bugs" aria-hidden="true"><span class="octicon octicon-link"></span></a>How to Report Bugs</h2>

<h3><a id="user-content-make-sure-it-is-a-jquery-bug" class="anchor" href="#make-sure-it-is-a-jquery-bug" aria-hidden="true"><span class="octicon octicon-link"></span></a>Make sure it is a jQuery bug</h3>

<p>Most bugs reported to our bug tracker are actually bugs in user code, not in jQuery code. Keep in mind that just because your code throws an error inside of jQuery, this does <em>not</em> mean the bug is a jQuery bug.</p>

<p>Ask for help first in the <a href="http://forum.jquery.com/using-jquery">Using jQuery Forum</a> or another discussion forum like <a href="http://stackoverflow.com/">Stack Overflow</a>. You will get much quicker support, and you will help avoid tying up the jQuery team with invalid bug reports.</p>

<h3><a id="user-content-disable-browser-extensions" class="anchor" href="#disable-browser-extensions" aria-hidden="true"><span class="octicon octicon-link"></span></a>Disable browser extensions</h3>

<p>Make sure you have reproduced the bug with all browser extensions and add-ons disabled, as these can sometimes cause things to break in interesting and unpredictable ways. Try using incognito, stealth or anonymous browsing modes.</p>

<h3><a id="user-content-try-the-latest-version-of-jquery" class="anchor" href="#try-the-latest-version-of-jquery" aria-hidden="true"><span class="octicon octicon-link"></span></a>Try the latest version of jQuery</h3>

<p>Bugs in old versions of jQuery may have already been fixed. In order to avoid reporting known issues, make sure you are always testing against the <a href="http://code.jquery.com/jquery.js">latest build</a>. We cannot fix bugs in older released files, if a bug has been fixed in a subsequent version of jQuery the site should upgrade.</p>

<h3><a id="user-content-simplify-the-test-case" class="anchor" href="#simplify-the-test-case" aria-hidden="true"><span class="octicon octicon-link"></span></a>Simplify the test case</h3>

<p>When experiencing a problem, <a href="http://webkit.org/quality/reduction.html">reduce your code</a> to the bare minimum required to reproduce the issue. This makes it <em>much</em> easier to isolate and fix the offending code. Bugs reported without reduced test cases take on average 9001% longer to fix than bugs that are submitted with them, so you really should try to do this if at all possible.</p>

<h3><a id="user-content-search-for-related-or-duplicate-issues" class="anchor" href="#search-for-related-or-duplicate-issues" aria-hidden="true"><span class="octicon octicon-link"></span></a>Search for related or duplicate issues</h3>

<p>Go to the <a href="https://github.com/jquery/jquery/issues">jQuery Core issue tracker</a> and make sure the problem hasn't already been reported. If not, create a new issue there and include your test case.</p>

<h2><a id="user-content-tips-for-bug-patching" class="anchor" href="#tips-for-bug-patching" aria-hidden="true"><span class="octicon octicon-link"></span></a>Tips For Bug Patching</h2>

<p>We <em>love</em> when people contribute back to the project by patching the bugs they find. Since jQuery is used by so many people, we are cautious about the patches we accept and want to be sure they don't have a negative impact on the millions of people using jQuery each day. For that reason it can take a while for any suggested patch to work its way through the review and release process. The reward for you is knowing that the problem you fixed will improve things for millions of sites and billions of visits per day.</p>

<h3><a id="user-content-build-a-local-copy-of-jquery" class="anchor" href="#build-a-local-copy-of-jquery" aria-hidden="true"><span class="octicon octicon-link"></span></a>Build a Local Copy of jQuery</h3>

<p>Create a fork of the jQuery repo on github at <a href="http://github.com/jquery/jquery">http://github.com/jquery/jquery</a></p>

<p>Change directory to your web root directory, whatever that might be:</p>

<div class="highlight highlight-source-shell"><pre>$ <span class="pl-c1">cd</span> /path/to/your/www/root/</pre></div>

<p>Clone your jQuery fork to work locally</p>

<div class="highlight highlight-source-shell"><pre>$ git clone git@github.com:username/jquery.git</pre></div>

<p>Change directory to the newly created dir jquery/</p>

<div class="highlight highlight-source-shell"><pre>$ <span class="pl-c1">cd</span> jquery</pre></div>

<p>Add the jQuery master as a remote. I label mine "upstream"</p>

<div class="highlight highlight-source-shell"><pre>$ git remote add upstream git://github.com/jquery/jquery.git</pre></div>

<p>Get in the habit of pulling in the "upstream" master to stay up to date as jQuery receives new commits</p>

<div class="highlight highlight-source-shell"><pre>$ git pull upstream master</pre></div>

<p>Run the build script</p>

<div class="highlight highlight-source-shell"><pre>$ npm run build</pre></div>

<p>Now open the jQuery test suite in a browser at http://localhost/test. If there is a port, be sure to include it.</p>

<p>Success! You just built and tested jQuery!</p>

<h3><a id="user-content-test-suite-tips" class="anchor" href="#test-suite-tips" aria-hidden="true"><span class="octicon octicon-link"></span></a>Test Suite Tips...</h3>

<p>During the process of writing your patch, you will run the test suite MANY times. You can speed up the process by narrowing the running test suite down to the module you are testing by either double clicking the title of the test or appending it to the url. The following examples assume you're working on a local repo, hosted on your localhost server.</p>

<p>Example:</p>

<p>http://localhost/test/?module=css</p>

<p>This will only run the "css" module tests. This will significantly speed up your development and debugging.</p>

<p><strong>ALWAYS RUN THE FULL SUITE BEFORE COMMITTING AND PUSHING A PATCH!</strong></p>

<h4><a id="user-content-loading-changes-on-the-test-page" class="anchor" href="#loading-changes-on-the-test-page" aria-hidden="true"><span class="octicon octicon-link"></span></a>Loading changes on the test page</h4>

<p>Rather than rebuilding jQuery with <code>grunt</code> every time you make a change, you can use the included <code>grunt watch</code> task to rebuild distribution files whenever a file is saved.</p>

<div class="highlight highlight-source-shell"><pre>$ grunt watch</pre></div>

<p>Alternatively, you can <strong>load tests in AMD</strong> to avoid the need for rebuilding altogether.</p>

<p>Click "Load with AMD" after loading the test page.</p>

<h3><a id="user-content-browser-support" class="anchor" href="#browser-support" aria-hidden="true"><span class="octicon octicon-link"></span></a>Browser support</h3>

<p>Remember that jQuery supports multiple browsers and their versions; any contributed code must work in all of them. You can refer to the <a href="http://jquery.com/browser-support/">browser support page</a> for the current list of supported browsers.</p>

<p>Note that browser support differs depending on whether you are targeting the <code>master</code> or <code>compat</code> branch.</p>
</article>
  </div>

</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

  </div>
  <div class="modal-backdrop"></div>
</div>

    </div>
  </div>

    </div>

        <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>
        <li><a href="https://github.com/pricing" data-ga-click="Footer, go to pricing, text:pricing">Pricing</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2015 <span title="0.11430s from github-fe137-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    
    
    

    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <span class="octicon octicon-x"></span>
      </button>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-b7c9523d93e6cd0235a0a8b7d1a691f7909d3834cd9c9caa7b1674ba508b644c.js"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-b42430c121e963c7370a99d029c78f3c2fdc9b75b73adf817f07802e33988e81.js"></script>
      
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner hidden">
      <span class="octicon octicon-alert"></span>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
  </body>
</html>

