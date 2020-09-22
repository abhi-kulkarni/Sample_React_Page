import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import Controls from "./components/Controls";
import logo from '../src/static/img/logo.png'
import queue_artist from '../src/static/img/artist1.jpg'
import playStore from '../src/static/img/gp.png'
import appleStore from '../src/static/img/as.png'
import profile_img from '../src/static/img/user.jpg'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import logo_footer from './static/img/logo2.png'
import {Twitter, Instagram, Facebook} from 'react-feather'
import {
    faHome,
    faMusic,
    faPlayCircle,
    faPodcast,
    faSearch,
    faBell,
    faStepBackward,
    faStepForward,
    faPlay,
    faRandom,
    faVolumeUp,
    faRetweet,
    faPauseCircle,
    faChevronRight,
    faChevronLeft
} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import Carousel from "./components/Carousels";
import top_pick_1 from "./static/img/TopPick1.jpg";
import top_pick_2 from "./static/img/TopPick2.jpg";
import top_pick_3 from "./static/img/TopPick3.jpg";
import artist1 from './static/img/artist1.jpg'
import artist2 from './static/img/artist2.jpg'
import artist3 from './static/img/artist3.jpg'
import artist4 from './static/img/artist4.jpg'
import artist5 from './static/img/artist5.jpg'
import artist6 from './static/img/artist6.jpg'
import artist7 from './static/img/artist7.jpg'
import artist8 from './static/img/artist8.jpg'
import recently_played_1 from './static/img/recentlyplayed1.jpg'
import recently_played_2 from './static/img/recentlyplayed2.jpg'
import recently_played_3 from './static/img/recentlyplayed3.jpg'
import recently_played_4 from './static/img/recentlyplayed4.jpg'
import f_playlist1 from './static/img/fplaylist1.jpg'
import f_playlist2 from './static/img/fplaylist2.jpg'
import f_playlist3 from './static/img/fplaylist3.jpg'
import f_playlist4 from './static/img/fplaylist4.jpg'
import p_playlist1 from './static/img/pplaylist1.jpg'
import p_playlist2 from './static/img/pplaylist2.jpg'
import p_playlist3 from './static/img/pplaylist3.jpg'
import p_playlist4 from './static/img/pplaylist4.jpg'
import mfy1 from './static/img/mfy1.jpg'
import mfy2 from './static/img/mfy2.jpg'
import mfy3 from './static/img/mfy3.jpg'
import trending1 from './static/img/trending1.jpg'
import trending2 from './static/img/trending2.jpg'
import trending3 from './static/img/trending3.jpg'
import trending4 from './static/img/trending4.jpg'
import pvideo1 from './static/img/pvideo1.jpg'
import pvideo2 from './static/img/pvideo2.jpg'
import pvideo3 from './static/img/pvideo3.jpg'
import pvideo4 from './static/img/pvideo4.jpg'
import radio1 from './static/img/radio1.jpg'
import radio2 from './static/img/radio2.jpg'
import radio3 from './static/img/radio3.jpg'
import radio4 from './static/img/radio4.jpg'
import trendvid1 from './static/img/trendingvideo1.jpg'
import trendvid2 from './static/img/trendingvideo2.jpg'
import trendvid3 from './static/img/trendingvideo3.jpg'
function App() {

    const audio = useRef('audio_tag');

    const volumeBar = useRef('');
    const [volume, setVolume] = useState(0.3);
    const [searchInput, setSearchInput] = useState('');
    const [showVolumeBar, setShowVolumeBar] = useState(false);
    const [random, setRandom] = useState(true);
    const [repeat, setRepeat] = useState(10);
    const [playing, setPlaying] = useState(false);
    const [dur, setDur] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [searchData, setSearchData] = useState(0);
    const [data, setData] = useState(0);
    const [isClicked, setIsClicked] = useState({'home':true, 'music': false, 'podcast': false, 'video': false});
    const [options, setOptions] = useState({
        margin: 30,
        autoplay: false,
        dots: false,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        loop: true,
        items: 3,
        nav: true,
        responsiveClass: true,
        responsive: {
            0: {
                margin: 10,
            },
            600: {
                margin: 30,
            },
            1000: {
                margin: 30,
            }
        }
        });
    const [options2, setOptions2] = useState({
        margin: 30,
        autoplay: false,
        dots: false,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        loop: true,
        nav: true,
        items: 4,
        responsiveClass: true,
        responsive: {
            0: {
                items: 3,
                margin: 10,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 4,
            }
        }
        });

    const fmtMSS = (s) => {
        return (s - (s %= 60)) / 60 + (10 <= s ? ':' : ':0') + ~~(s)
    };
    const [currSong, setCurrSong] = useState("https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/wwy.mp3");
    const [prevSong, setPrevSong] = useState("https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/wwy.mp3");

    const toggleAudio = () => {
        if (audio.current.paused) {
            setPlaying(true);
            audio.current.play()
        } else {
            setPlaying(false);
            audio.current.pause();
        }
    };

    const handleChange = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        setSearchInput(value);
    };

    const handleVolume = (volume) => {
        setVolume(volume);
        audio.current.volume = volume;
    };

    const nextSong = () => {
        alert('Song')
    };

    const togglePlaying = () => {
        alert('Playing')
    };

    const toggleRandom = () => {
        alert('TOGGLE')
    };

    const toggleRepeat = () => {
        alert('Repeat')
    };

    const changeColorBar = (e) => {
        e.preventDefault();
        e.target.style.background = 'linear-gradient(to right, #82CFD0 0%, #82CFD0 ' + e.target.value + '%, #fff ' + e.target.value + '%, white 100%)'
    };

    const handleMenuClick = (e) => {
        e.preventDefault();
        Object.keys(isClicked).map(item => {
            if(e.target.id === 'home'){
                setIsClicked({...isClicked, 'home': true, 'music': false, 'podcast': false, 'video': false});
            }else if(e.target.id === 'music'){
                setIsClicked({...isClicked, 'home': false, 'music': true, 'podcast': false, 'video': false});
            }else if(e.target.id === 'podcast'){
                setIsClicked({...isClicked, 'home': false, 'music': false, 'podcast': true, 'video': false});
            }else if(e.target.id === 'video'){
                setIsClicked({...isClicked, 'home': false, 'music': false, 'podcast': false, 'video': true});
            }
        });
        console.log(isClicked)
    };

    const handleProgress = (e) => {
        let compute = (e.target.value * dur) / 100;
        setCurrentTime(compute);
        audio.current.currentTime = compute;

    };

    const handleEnd = () => {
        alert('END');
        setPlaying(false);
    };

    // useEffect(() => {
    //     audio.current.volume = volume;
    //     if (playing) {
    //         toggleAudio()
    //     }
    // }, [currSong]);

    useEffect(() => {
        getData();
        // document.addEventListener('mousedown', handleClickOutside, false)
    }, []);


    const getData = () => {
        axios.get('http://43.240.103.34/api.shadhin/api/search?keyword=valo').then(res => {
            let album = res.data.data.Album.data;
            let artist = res.data.data.Artist.data;
            let track = res.data.data.Track.data;
            let video = res.data.data.Video.data;
            let podcast_show = res.data.data.PodcastShow.data;
            let podcast_episode = res.data.data.PodcastEpisode.data;
            let podcast_track = res.data.data.PodcastTrack.data;
            let data = album.concat(artist).concat(track).concat(video).concat(podcast_show).concat(podcast_episode).concat(podcast_track);
            let required_data = data.map((item, index) => {
                    let temp = {};
                    temp['artist'] = item.Artist;
                    temp['image'] = item.image.replace("<$size$>", "300");
                    temp['title'] = item.title;
                    temp['content_id'] = item.ContentID;
                    temp['unique_name'] = item.Artist+item.title;
                    return temp
            });
            let unique_data = required_data.filter((item, index, self) =>
                index === self.findIndex((t) => (
                    t.title === item.title && t.artist === item.artist
                ))
            );
            setData(unique_data);
            setSearchData(unique_data);
        }).catch(err => {
            console.log(err)
        });
    };

    const handleClickOutside = (e) => {
        if (!volumeBar.current.contains(e.target)) {
            setShowVolumeBar(false);
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        let search_data = e.target.value;
        setSearchInput(search_data);
        if (search_data && searchData.length > 0) {
            const searchedData = searchData.filter(item => {
                if (item.title.toLowerCase().includes(search_data.toLowerCase()) || item.artist.toLowerCase().includes(search_data.toLowerCase())) {
                    return item
                }
            });
            setData(searchedData);
        } else {
            setData(searchData)
        }
    };

    return (
        <div className="App" style={{backgroundColor: '#f0f0f0'}}>
            <div className="row" style={{padding: '0px 0px 0px 0px', margin: '0px'}}>
                <div style={{borderRight: '1px solid #f0f0f0', padding: '10px 0px 0px 20px', margin: '0px', backgroundColor: 'white'}}
                     className="col-xs-3 col-sm-2 col-md-2 col-lg-2">
                    <div style={{padding: '0px', margin: '0px'}} className="row">
                        <div style={{padding: '10px 0px 10px 0px'}} className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <img className="pull-left img-responsive" alt="app_logo"
                                 style={{borderRadius: '10px', width: '90%', cursor: 'pointer'}}
                                 src={logo}/>
                        </div>
                    </div>
                    <div className="row" style={{marginTop: '10px', cursor: 'pointer'}}>
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3" style={{padding: '3px 0px 0px 0px'}}>
                            <FontAwesomeIcon color={isClicked['home']?'#00A1FF': '#9B9B9B'} size="lg" icon={faHome}/>
                        </div>
                        <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9" style={{paddingLeft: '0px'}}>
                            <span id="home" onClick={e => handleMenuClick(e)} style={{fontSize: '20px', fontWeight: 'normal', color: isClicked['home']?'#00A1FF': '#9B9B9B'}}
                                  className="pull-left">Home</span>
                        </div>
                    </div>
                    <div className="row" style={{marginTop: '10px', cursor: 'pointer'}}>
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3" style={{padding: '3px 0px 0px 0px'}}>
                            <FontAwesomeIcon color={isClicked['music']?'#00A1FF': '#9B9B9B'} size="lg" icon={faMusic}/>
                        </div>
                        <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9" style={{paddingLeft: '0px'}}>
                            <span id="music" onClick={e => handleMenuClick(e)} style={{fontSize: '20px', fontWeight: 'normal', color: isClicked['music']?'#00A1FF': '#9B9B9B'}}
                                  className="pull-left">My Music</span>
                        </div>
                    </div>
                    <div className="row" style={{marginTop: '10px', cursor: 'pointer'}}>
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3" style={{padding: '3px 0px 0px 0px'}}>
                            <FontAwesomeIcon color={isClicked['podcast']?'#00A1FF': '#9B9B9B'} size="lg" icon={faPodcast}/>
                        </div>
                        <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9" style={{paddingLeft: '0px'}}>
                            <span id="podcast" onClick={e => handleMenuClick(e)} style={{fontSize: '20px', fontWeight: 'normal', color: isClicked['podcast']?'#00A1FF': '#9B9B9B'}}
                                  className="pull-left">Podcast</span>
                        </div>
                    </div>
                    <div className="row" style={{marginTop: '10px', cursor: 'pointer'}}>
                        <div className="col-xs-4 col-sm-3 col-md-3 col-lg-3" style={{padding: '3px 0px 0px 0px'}}>
                            <FontAwesomeIcon color={isClicked['video']?'#00A1FF': '#9B9B9B'} size="lg" icon={faPlayCircle}/>
                        </div>
                        <div className="col-xs-8 col-sm-9 col-md-9 col-lg-9" style={{paddingLeft: '0px'}}>
                            <span id="video" onClick={e => handleMenuClick(e)} style={{fontSize: '20px', fontWeight: 'normal', color: isClicked['video']?'#00A1FF': '#9B9B9B'}}
                                  className="pull-left">Video</span>
                        </div>
                    </div>
                    <div id="pro_gradient" style={{
                        padding: '0px',
                        margin: '25px 20px 0px 0px',
                        borderRadius: '10px',
                        height:'auto',
                        color: 'white'
                    }} className="row">
                        <div className="row" style={{margin: '10px 0px', padding: '0px'}}>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <span style={{fontSize: '20px', fontWeight: 'normal'}}>Upgrade to Pro</span>
                            </div>
                        </div>
                        <div className="row" style={{margin: '10px 0px 0px 0px', padding: '0px'}}>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <span style={{fontSize: '12px', fontWeight: 'normal', overflowWrap: 'break-word'}}>Ad-free, unlimited offline downloads and create playlist</span>
                            </div>
                        </div>
                        <div className="row" style={{margin: '20px 0px 0px 0px', padding: '0px'}}>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <button style={{borderRadius: '10px', whiteSpace: 'normal', margin: '0px 0px 15px 0px'}} type="button"
                                        className="btn btn-outline-white btn-block"><span style={{
                                    color: 'white',
                                    textTransform: 'capitalize',
                                    fontSize: '16px'
                                }}>Get Pro</span></button>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{marginTop: '20px', cursor: 'pointer'}}>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                      <span className="pull-left" style={{
                          fontWeight: 'normal',
                          fontSize: '18px', fontFamily: 'sans-serif', color: '#9B9B9B', padding: '0px 10px 0px 0px'
                      }}>Download the App</span>
                        </div>
                    </div>
                    <div className="row" style={{marginTop: '10px', cursor: 'pointer'}}>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <img style={{paddingRight: '20px'}} className="img-responsive" alt="playstore" src={playStore}/>
                        </div>
                    </div>
                    <div className="row" style={{padding: '10px 0px 50px 0px', cursor: 'pointer'}}>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <img style={{paddingRight: '20px'}} className="img-responsive" alt="applestore" src={appleStore}/>
                        </div>
                    </div>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                </div>
                <div style={{padding: '0px'}} className="col-xs-9 col-sm-10 col-md-10 col-lg-10">
                    <div style={{padding: '20px 0px 10px 0px', margin: '0px', borderBottom: '1px solid white', backgroundColor: 'white'}}
                         className="row">
                        <div style={{margin: '0px', padding: '0px 0px 0px 20px', cursor: 'pointer'}}
                             className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                            <FontAwesomeIcon className="pull-left" style={{margin: '8px 0px 0px 10px'}} color="#9B9B9B"
                                             size="lg" icon={faSearch}/>
                        </div>
                        <div style={{margin: '0px', padding: '0px'}} className="col-xs-6 col-sm-8 col-md-8 col-lg-8">
                            <input autoFocus
                                   onChange={e => handleSearch(e)}
                                   value={searchInput}
                                   style={{border: 'none', outline: 'none', boxShadow: 'none', caretColor: '#00A1FF', postion: 'relative'}}
                                   type="text" className="form-control" aria-label="search"
                                   placeholder="Search artists, songs, videos..."
                                   aria-describedby="search"/>
                                   <div style={{position: 'absolute', backgroundColor: 'white', width: '100%', top: '45px', left: '-25px', zIndex:' 10'}} className="row">
                                       {data && data.length > 0 && searchInput.length > 0?
                                           data.map((item, index) => {
                                               return (<div key={index} style={{ padding: '10px 0px'}} className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                               <div style={{margin: '0px', padding: '0px'}} className="row">
                                                   <div style={{ padding: '5px 0px 0px 10px', margin: '0px'}} className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                                                       <img className="pull-right img-responsive" alt="album_img" src={item.image} style={{borderRadius: '6px', width: '40px'}}/>
                                                   </div>
                                                   <div style={{ padding: '0px 0px 0px 20px', margin: '0px'}} className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                                                       <span className="pull-left" style={{fontSize: '18px', fontWeight: 'normal', color: 'black', marginTop: '10px'}}>{item.artist} - {item.title}</span>
                                                   </div>
                                               </div>

                                               </div>) }) : ""}
                                   </div>
                        </div>
                        <div style={{margin: '0px', padding: '8px 0px 0px 0px', cursor: 'pointer'}}
                             className="col-xs-3 col-sm-2 col-md-2 col-lg-2">
                            <FontAwesomeIcon className="pull-right" color="black" size="lg" icon={faBell}/>

                        </div>
                        <div style={{padding: '0px 20px 0px 20px', margin: '0px', cursor: 'pointer'}}
                             className="col-xs-2 col-sm-1 col-md-1 col-lg-1">
                            <img className="pull-left" style={{borderRadius: '40px'}} width="35px" alt="profile_img"
                                 src={profile_img}/>
                        </div>
                    </div>
                    <div className="row" style={{padding: '0px', margin: '0px', backgroundColor: '#f0f0f0', width: '100%'}}>
                        <div style={{ padding: '15px 0px 15px 10px'}} className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <span className="pull-left" style={{fontWeight: 'normal', color:'black', fontFamily: 'sans-serif', fontSize: '35px'}}>Top Picks</span>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <OwlCarousel
                                margin={30}
                                autoplay={false}
                                dots={true}
                                autoplayTimeout={2000}
                                autoplayHoverPause={true}
                                loop={true}
                                items={3}
                                nav={false}
                                responsiveClass={true}
                                responsive={{
                                    0: {
                                        margin: 10,
                                    },
                                    600: {
                                        margin: 30,
                                    },
                                    1000: {
                                        margin: 30,
                                    }
                                }}
                                className="owl-theme owl-carousel"
                            >
                                <div className="item">
                                    <img style={{borderRadius: '10px', width: '90%'}} alt="top_picks" src={top_pick_1}/>
                                </div>
                                <div className="item">
                                    <img style={{borderRadius: '10px', width: '90%'}} alt="top_picks" src={top_pick_2}/>
                                </div>
                                <div className="item">
                                    <img style={{borderRadius: '10px', width: '90%'}} alt="top_picks" src={top_pick_3}/>
                                </div>
                            </OwlCarousel>
                        </div>
                        <div style={{ margin: '50px 0px 20px 0px'}}  className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <span className="pull-left" style={{fontWeight: 'normal', color:'black', fontFamily: 'sans-serif', fontSize: '35px'}}>Artists</span>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <OwlCarousel
                                margin={30}
                                autoplay={false}
                                dots={true}
                                autoplayTimeout={2000}
                                autoplayHoverPause={true}
                                loop={true}
                                nav={false}
                                items={4}
                                responsiveClass={true}
                                responsive={{
                                    0: {
                                        items: 3,
                                        margin: 10,
                                    },
                                    600: {
                                        items: 3,
                                    },
                                    1000: {
                                        items: 4,
                                    }
                                }}
                                className="owl-theme owl-carousel"
                            >
                                <div className="item">
                                    <img style={{borderRadius: '50%', width: '100%'}} alt="artists" src={artist1}/>
                                    <h3 style={{fontWeight: 'normal', fontFamily: 'sans-serif', color: 'black', paddingLeft: '20px'}}>Hridoy Khan</h3>
                                    <h5 style={{fontWeight: 'normal', fontFamily: 'sans-serif', color: '#9B9B9B'}}>0000 fans</h5>
                                </div>
                                <div className="item">
                                    <img style={{borderRadius: '50%', width: '100%'}} alt="artists" src={artist2}/>
                                    <h3 style={{fontWeight: 'normal', fontFamily: 'sans-serif', color: 'black', paddingLeft: '20px'}}>Asif</h3>
                                    <h5 style={{fontWeight: 'normal', fontFamily: 'sans-serif', color: '#9B9B9B'}}>0000 fans</h5>
                                </div>
                                <div className="item">
                                    <img style={{borderRadius: '50%', width: '100%'}} alt="artists" src={artist3}/>
                                    <h3 style={{fontWeight: 'normal', fontFamily: 'sans-serif', color: 'black', paddingLeft: '20px'}}>Habib Wahid</h3>
                                    <h5 style={{fontWeight: 'normal', fontFamily: 'sans-serif', color: '#9B9B9B'}}>0000 fans</h5>
                                </div>
                                 <div className="item">
                                    <img style={{borderRadius: '50%', width: '100%'}} alt="artists" src={artist4}/>
                                    <h3 style={{fontWeight: 'normal', fontFamily: 'sans-serif', color: 'black', paddingLeft: '20px'}}>Imran</h3>
                                    <h5 style={{fontWeight: 'normal', fontFamily: 'sans-serif', color: '#9B9B9B'}}>0000 fans</h5>
                                </div>
                            </OwlCarousel>
                        </div>
                        <div style={{ margin: '40px 0px 20px 0px'}} className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <span className="pull-left" style={{fontWeight: 'normal', color:'black', fontFamily: 'sans-serif', fontSize: '35px'}}>Recently Played</span>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <OwlCarousel
                                margin={30}
                                autoplay={false}
                                dots={true}
                                autoplayTimeout={2000}
                                autoplayHoverPause={true}
                                loop={true}
                                nav={false}
                                items={4}
                                responsiveClass={true}
                                responsive={{
                                    0: {
                                        items: 3,
                                        margin: 10,
                                    },
                                    600: {
                                        items: 3,
                                    },
                                    1000: {
                                        items: 4,
                                    }
                                }}
                                className="owl-theme owl-carousel"
                            >
                                <div className="item">
                                    <img style={{borderRadius: '10px', width: '100%'}} alt="recently_played" src={recently_played_1}/>
                                    <h3 className="pull-left" style={{fontWeight: 'normal', fontFamily: 'sans-serif', color: 'black', marginBottom: '0px'}}>Cats and music</h3>
                                    <h5 className="pull-left" style={{fontWeight: 'normal', fontFamily: 'sans-serif', color: '#9B9B9B'}}>Artist name goes here</h5>
                                </div>
                                <div className="item">
                                    <img style={{borderRadius: '10px', width: '100%'}} alt="recently_played" src={recently_played_2}/>
                                    <h3 className="pull-left" style={{fontWeight: 'normal', fontFamily: 'sans-serif', color: 'black', marginBottom: '0px'}}>Music Name</h3>
                                    <h5 className="pull-left" style={{fontWeight: 'normal', fontFamily: 'sans-serif', color: '#9B9B9B'}}>Artist name goes here</h5>
                                </div>
                                <div className="item">
                                    <img style={{borderRadius: '10px', width: '100%'}} alt="recently_played" src={recently_played_3}/>
                                    <h3 className="pull-left" style={{fontWeight: 'normal', fontFamily: 'sans-serif', color: 'black', marginBottom: '0px'}}>Music Name</h3>
                                    <h5 className="pull-left" style={{fontWeight: 'normal', fontFamily: 'sans-serif', color: '#9B9B9B'}}>Artist name goes here</h5>
                                </div>
                                 <div className="item">
                                    <img style={{borderRadius: '10px', width: '100%'}} alt="recently_played" src={recently_played_4}/>
                                    <h3 className="pull-left" style={{fontWeight: 'normal', fontFamily: 'sans-serif', color: 'black', marginBottom: '0px'}}>Music Name</h3>
                                    <h5 className="pull-left" style={{fontWeight: 'normal', fontFamily: 'sans-serif', color: '#9B9B9B'}}>Artist name goes here</h5>
                                </div>
                            </OwlCarousel>
                        </div>
                        <div style={{ margin: '40px 0px 20px 0px'}} className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <span className="pull-left" style={{fontWeight: 'normal', color:'black', fontFamily: 'sans-serif', fontSize: '35px'}}>Featured Playlist</span>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <OwlCarousel
                                margin={30}
                                autoplay={false}
                                dots={true}
                                autoplayTimeout={2000}
                                autoplayHoverPause={true}
                                loop={true}
                                nav={false}
                                items={4}
                                responsiveClass={true}
                                responsive={{
                                    0: {
                                        items: 3,
                                        margin: 10,
                                    },
                                    600: {
                                        items: 3,
                                    },
                                    1000: {
                                        items: 4,
                                    }
                                }}
                                className="owl-theme owl-carousel"
                            >
                                <div className="item">
                                    <img style={{borderRadius: '10px', width: '100%'}} alt="featured_playlist" src={f_playlist1}/>
                                </div>
                                <div className="item">
                                    <img style={{borderRadius: '10px', width: '100%'}} alt="featured_playlist" src={f_playlist2}/>
                                </div>
                                <div className="item">
                                    <img style={{borderRadius: '10px', width: '100%'}} alt="featured_playlist" src={f_playlist3}/>
                                </div>
                                 <div className="item">
                                    <img style={{borderRadius: '10px', width: '100%'}} alt="featured_playlist" src={f_playlist4}/>
                                </div>
                            </OwlCarousel>
                        </div>
                        <div style={{ margin: '40px 0px 20px 0px'}} className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <span className="pull-left" style={{fontWeight: 'normal', color:'black', fontFamily: 'sans-serif', fontSize: '35px'}}>Popular Playlist</span>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <OwlCarousel
                                margin={30}
                                autoplay={false}
                                dots={true}
                                autoplayTimeout={2000}
                                autoplayHoverPause={true}
                                loop={true}
                                nav={false}
                                items={4}
                                responsiveClass={true}
                                responsive={{
                                    0: {
                                        items: 3,
                                        margin: 10,
                                    },
                                    600: {
                                        items: 3,
                                    },
                                    1000: {
                                        items: 4,
                                    }
                                }}
                                className="owl-theme owl-carousel"
                            >
                                <div className="item">
                                    <img style={{borderRadius: '10px', width: '100%'}} alt="popular_playlist" src={p_playlist1}/>
                                </div>
                                <div className="item">
                                    <img style={{borderRadius: '10px', width: '100%'}} alt="popular_playlist" src={p_playlist2}/>
                                </div>
                                <div className="item">
                                    <img style={{borderRadius: '10px', width: '100%'}} alt="popular_playlist" src={p_playlist3}/>
                                </div>
                                 <div className="item">
                                    <img style={{borderRadius: '10px', width: '100%'}} alt="popular_playlist" src={p_playlist4}/>
                                </div>
                            </OwlCarousel>
                        </div>
                        <div style={{ margin: '40px 0px 20px 0px'}} className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <span className="pull-left" style={{fontWeight: 'normal', color:'black', fontFamily: 'sans-serif', fontSize: '35px'}}>Made for you</span>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <OwlCarousel
                                margin={30}
                                autoplay={false}
                                dots={true}
                                autoplayTimeout={2000}
                                autoplayHoverPause={true}
                                loop={true}
                                items={3}
                                nav={false}
                                responsiveClass={true}
                                responsive={{
                                    0: {
                                        margin: 10,
                                    },
                                    600: {
                                        margin: 30,
                                    },
                                    1000: {
                                        margin: 30,
                                    }
                                }}
                                className="owl-theme owl-carousel"
                            >
                                <div className="item">
                                    <img style={{borderRadius: '10px', width: '100%'}} alt="made_for_you_albums" src={mfy1}/>
                                    <h3 className="pull-left" style={{fontWeight: 'normal', fontFamily: 'sans-serif', color: '#9B9B9B'}}>My Favourites</h3>
                                </div>
                                <div className="item">
                                    <img style={{borderRadius: '10px', width: '100%'}} alt="made_for_you_albums" src={mfy2}/>
                                    <h3 className="pull-left" style={{fontWeight: 'normal', fontFamily: 'sans-serif', color: '#9B9B9B'}}>Mix International Hitz</h3>
                                </div>
                                <div className="item">
                                    <img style={{borderRadius: '10px', width: '100%'}} alt="made_for_you_albums" src={mfy3}/>
                                    <h3 className="pull-left" style={{fontWeight: 'normal', fontFamily: 'sans-serif', color: '#9B9B9B'}}>Summer Vides</h3>
                                </div>

                            </OwlCarousel>
                        </div>
                        <div style={{ margin: '40px 0px 20px 0px'}} className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <span className="pull-left" style={{fontWeight: 'normal', color:'black', fontFamily: 'sans-serif', fontSize: '35px'}}>Trending Now</span>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <OwlCarousel
                                margin={30}
                                autoplay={false}
                                dots={true}
                                autoplayTimeout={2000}
                                autoplayHoverPause={true}
                                loop={true}
                                nav={false}
                                items={4}
                                responsiveClass={true}
                                responsive={{
                                    0: {
                                        items: 3,
                                        margin: 10,
                                    },
                                    600: {
                                        items: 3,
                                    },
                                    1000: {
                                        items: 4,
                                    }
                                }}
                                className="owl-theme owl-carousel"
                            >
                                <div className="item">
                                    <img style={{borderRadius: '10px', width: '100%'}} alt="trending_now" src={trending1}/>
                                    <h3 className="pull-left" style={{fontWeight: 'normal', fontFamily: 'sans-serif', color: 'black', marginBottom: '0px'}}>Cats and music</h3>
                                    <h5 className="pull-left" style={{fontWeight: 'normal', fontFamily: 'sans-serif', color: '#9B9B9B'}}>Artist name goes here</h5>
                                </div>
                                <div className="item">
                                    <img style={{borderRadius: '10px', width: '100%'}} alt="trending_now" src={trending2}/>
                                    <h3 className="pull-left" style={{fontWeight: 'normal', fontFamily: 'sans-serif', color: 'black', marginBottom: '0px'}}>Music Name</h3>
                                    <h5 className="pull-left" style={{fontWeight: 'normal', fontFamily: 'sans-serif', color: '#9B9B9B'}}>Artist name goes here</h5>
                                </div>
                                <div className="item">
                                    <img style={{borderRadius: '10px', width: '100%'}} alt="trending_now" src={trending3}/>
                                    <h3 className="pull-left" style={{fontWeight: 'normal', fontFamily: 'sans-serif', color: 'black', marginBottom: '0px'}}>Music Name</h3>
                                    <h5 className="pull-left" style={{fontWeight: 'normal', fontFamily: 'sans-serif', color: '#9B9B9B'}}>Artist name goes here</h5>
                                </div>
                                 <div className="item">
                                    <img style={{borderRadius: '10px', width: '100%'}} alt="trending_now" src={trending4}/>
                                    <h3 className="pull-left" style={{fontWeight: 'normal', fontFamily: 'sans-serif', color: 'black', marginBottom: '0px'}}>Music Name</h3>
                                    <h5 className="pull-left" style={{fontWeight: 'normal', fontFamily: 'sans-serif', color: '#9B9B9B'}}>Artist name goes here</h5>
                                </div>
                            </OwlCarousel>
                        </div>
                        <div style={{ margin: '40px 0px 20px 0px'}} className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <span className="pull-left" style={{fontWeight: 'normal', color:'black', fontFamily: 'sans-serif', fontSize: '35px'}}>Popular Videos</span>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <OwlCarousel
                                margin={30}
                                autoplay={false}
                                dots={true}
                                autoplayTimeout={2000}
                                autoplayHoverPause={true}
                                loop={true}
                                nav={false}
                                items={4}
                                responsiveClass={true}
                                responsive={{
                                    0: {
                                        items: 3,
                                        margin: 10,
                                    },
                                    600: {
                                        items: 3,
                                    },
                                    1000: {
                                        items: 4,
                                    }
                                }}
                                className="owl-theme owl-carousel"
                            >
                                <div className="item">
                                    <img style={{borderRadius: '10px', width: '100%'}} alt="popular_videos" src={pvideo1}/>
                                    <h3 className="pull-left" style={{fontWeight: 'normal', fontFamily: 'sans-serif', color: 'black', marginBottom: '0px'}}>Music Video Name</h3>
                                    <h5 className="pull-left" style={{fontWeight: 'normal', fontFamily: 'sans-serif', color: '#9B9B9B'}}>Artist name goes here</h5>
                                </div>
                                <div className="item">
                                    <img style={{borderRadius: '10px', width: '100%'}} alt="popular_videos" src={pvideo2}/>
                                    <h3 className="pull-left" style={{fontWeight: 'normal', fontFamily: 'sans-serif', color: 'black', marginBottom: '0px'}}>Music Video Name</h3>
                                    <h5 className="pull-left" style={{fontWeight: 'normal', fontFamily: 'sans-serif', color: '#9B9B9B'}}>Artist name goes here</h5>
                                </div>
                                <div className="item">
                                    <img style={{borderRadius: '10px', width: '100%'}} alt="popular_videos" src={pvideo3}/>
                                    <h3 className="pull-left" style={{fontWeight: 'normal', fontFamily: 'sans-serif', color: 'black', marginBottom: '0px'}}>Music Video Name</h3>
                                    <h5 className="pull-left" style={{fontWeight: 'normal', fontFamily: 'sans-serif', color: '#9B9B9B'}}>Artist name goes here</h5>
                                </div>
                                 <div className="item">
                                    <img style={{borderRadius: '10px', width: '100%'}} alt="popular_videos" src={pvideo4}/>
                                    <h3 className="pull-left" style={{fontWeight: 'normal', fontFamily: 'sans-serif', color: 'black', marginBottom: '0px'}}>Music Video Name</h3>
                                    <h5 className="pull-left" style={{fontWeight: 'normal', fontFamily: 'sans-serif', color: '#9B9B9B'}}>Artist name goes here</h5>
                                </div>
                            </OwlCarousel>
                        </div>
                        <div style={{ margin: '40px 0px 20px 0px'}} className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <span className="pull-left" style={{fontWeight: 'normal', color:'black', fontFamily: 'sans-serif', fontSize: '35px'}}>Radio</span>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <OwlCarousel
                                margin={30}
                                autoplay={false}
                                dots={true}
                                autoplayTimeout={2000}
                                autoplayHoverPause={true}
                                loop={true}
                                nav={false}
                                items={4}
                                responsiveClass={true}
                                responsive={{
                                    0: {
                                        items: 3,
                                        margin: 10,
                                    },
                                    600: {
                                        items: 3,
                                    },
                                    1000: {
                                        items: 4,
                                    }
                                }}
                                className="owl-theme owl-carousel"
                            >
                                <div className="item">
                                    <img style={{borderRadius: '50%', width: '100%'}} alt="radio" src={radio1}/>
                                </div>
                                <div className="item">
                                    <img style={{borderRadius: '50%', width: '100%'}} alt="radio" src={radio2}/>
                                </div>
                                <div className="item">
                                    <img style={{borderRadius: '50%', width: '100%'}} alt="radio" src={radio3}/>
                                </div>
                                 <div className="item">
                                    <img style={{borderRadius: '50%', width: '100%'}} alt="radio" src={radio4}/>
                                </div>
                            </OwlCarousel>
                        </div>
                        <div style={{ margin: '40px 0px 20px 0px'}} className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <span className="pull-left" style={{fontWeight: 'normal', color:'black', fontFamily: 'sans-serif', fontSize: '35px'}}>Trending Videos</span>
                        </div>
                        <div style={{ margin: '0px 0px 50px 0px'}} className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <OwlCarousel
                                margin={30}
                                autoplay={false}
                                dots={false}
                                autoplayTimeout={2000}
                                autoplayHoverPause={true}
                                loop={true}
                                nav={false}
                                responsiveClass={true}
                                responsive={{
                                    0:{
                                        items:1,
                                    },
                                    600:{
                                        items:2,
                                    },
                                    1000:{
                                        items:2,
                                    }
                                }}
                                className="owl-theme owl-carousel"
                            >
                                <div className="item">
                                    <img style={{borderRadius: '10px', width: '100%'}} alt="trending_videos" src={trendvid1}/>
                                </div>
                                <div className="item">
                                    <img style={{borderRadius: '10px', width: '100%'}} alt="trending_videos" src={trendvid2}/>
                                </div>
                                <div className="item">
                                    <img style={{borderRadius: '10px', width: '100%'}} alt="trending_videos" src={trendvid3}/>
                                </div>

                            </OwlCarousel>
                        </div>
                    </div>
                    <div className="row" style={{padding: '0px 12px 0px 16px', margin: '0px'}}>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{backgroundColor: 'white'}}>
                            <div className="row" style={{padding: '0px 12px 0px 16px', margin: '0px'}}>
                                <div style={{ padding: '8px 0px 0px 0px'}} className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                    <img className="row img-responsive" alt="logo_footer" style={{ width: '150px', paddingTop: '25px', paddingLeft: '18px'}} src={logo_footer}/>
                                    <div className="row" style={{padding: '14px 0px 0px 0px', margin: '0px'}}><Instagram style={{width: '15px', color: 'black', margin: '0px 5px'}} className="pull-left"/><span className="pull-left" style={{margin: '1px 0px 0px 10px'}}>Instagram</span></div><br/>
                                    <div className="row" style={{padding: '0px', margin: '0px'}}><Facebook className="pull-left" style={{width: '15px', color: 'black', marginLeft: '5px'}}/><span className="pull-left" style={{margin: '1px 0px 0px 15px'}}>Facebook</span></div><br/>
                                    <div className="row" style={{padding: '0px', margin: '0px'}}><Twitter className="pull-left" style={{width: '15px', color: 'black', marginLeft: '5px'}}/><span className="pull-left" style={{margin: '1px 0px 0px 15px'}}>Twitter</span></div>
                                </div>
                                <div style={{ padding: '18px 0px 10px 0px'}} className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                    <h3 className="row" style={{color: '#676767', fontWeight: 'normal'}}>Who we are ?</h3>
                                    <h5 className="row" style={{color: '#7F7F7F', fontWeight: 'normal',  padding: '10px 0px 0px 0px', margin: '0px'}}>About us</h5><br/>
                                    <h5 className="row" style={{color: '#7F7F7F', fontWeight: 'normal',  padding: '10px 0px 0px 0px', margin: '0px'}}>Contact us</h5><br/>
                                    <h5 className="row" style={{color: '#7F7F7F', fontWeight: 'normal',  padding: '10px 0px 0px 0px', margin: '0px'}}>News</h5>
                                </div>
                                <div style={{ padding: '18px 0px 10px 0px'}} className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                    <h3 className="row" style={{color: '#676767', fontWeight: 'normal'}}>Explore</h3>
                                    <h5 className="row" style={{color: '#7F7F7F', fontWeight: 'normal',  padding: '10px 0px 0px 0px', margin: '0px'}}>Home</h5><br/>
                                    <h5 className="row" style={{color: '#7F7F7F', fontWeight: 'normal',  padding: '10px 0px 0px 0px', margin: '0px'}}>Podcast</h5><br/>
                                    <h5 className="row" style={{color: '#7F7F7F', fontWeight: 'normal',  padding: '10px 0px 0px 0px', margin: '0px'}}>Video</h5>
                                </div>
                                <div style={{ padding: '18px 0px 10px 0px'}} className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                    <h3 className="row" style={{color: '#676767', fontWeight: 'normal'}}>Legal</h3>
                                    <h5 className="row" style={{color: '#7F7F7F', fontWeight: 'normal',  padding: '10px 0px 0px 0px', margin: '0px'}}>Help & Support</h5><br/>
                                    <h5 className="row" style={{color: '#7F7F7F', fontWeight: 'normal',  padding: '10px 0px 0px 0px', margin: '0px'}}>Terms of services</h5><br/>
                                    <h5 className="row" style={{color: '#7F7F7F', fontWeight: 'normal',  padding: '10px 0px 0px 0px', margin: '0px'}}>FAQ</h5>
                                </div>
                                <div style={{ padding: '18px 0px 10px 0px'}} className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                    <h3 className="row" style={{color: '#676767', fontWeight: 'normal'}}>Products</h3>
                                    <h5 className="row" style={{color: '#7F7F7F', fontWeight: 'normal',  padding: '10px 0px 0px 0px', margin: '0px'}}>Android</h5><br/>
                                    <h5 className="row" style={{color: '#7F7F7F', fontWeight: 'normal',  padding: '10px 0px 0px 0px', margin: '0px'}}>iOS</h5><br/>
                                    <h5 className="row" style={{color: '#7F7F7F', fontWeight: 'normal',  padding: '10px 0px 0px 0px', margin: '0px'}}>Web Player</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{backgroundColor: 'white'}}>
                            <br/><br/><br/><br/>
                            <h5 style={{fontWeight: 'normal', color: '#9b9b9b', margin: '20px 20px 20px 0px'}}>&copy; 2020 Shadhin. All rights
                                reserved</h5>
                            <br/><br/>
                        </div>
                    </div>

                </div>
            </div>
            <div className="row" style={{padding: '0px', margin: '0px 0px 0px 0px', borderTop: '1px solid #d3d3d3'}}>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <div className="row pull-left" style={{margin: '10px 0px 0px 0px', padding: '0px 0px 0px 30px'}}>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12"
                             style={{margin: '10px 0px 15px 0px', padding: '0px'}}>
                            <FontAwesomeIcon style={{margin: '0px 30px 10px 0px', cursor: 'pointer'}} color="#9B9B9B"
                                             size="1x" icon={faStepBackward}/>
                            {playing ? <FontAwesomeIcon onClick={toggleAudio}
                                                        style={{margin: '0px 0px 0px 0px', cursor: 'pointer'}}
                                                        color="#00A1FF" size="3x" icon={faPauseCircle}/> :
                                <FontAwesomeIcon onClick={toggleAudio}
                                                 style={{margin: '0px 0px 0px 0px', cursor: 'pointer'}} color="#00A1FF"
                                                 size="3x" icon={faPlayCircle}/>}
                            <FontAwesomeIcon style={{margin: '0px 0px 10px 30px', cursor: 'pointer'}} color="#9B9B9B"
                                             size="1x" icon={faStepForward}/>
                        </div>
                    </div>
                </div>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <div className="row" style={{margin: '10px 0px 0px 0px', padding: '0px'}}>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <audio
                                onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
                                onCanPlay={(e) => setDur(e.target.duration)}
                                onEnded={handleEnd}
                                ref={audio}
                                preload='true'
                                src={currSong}/>
                        </div>
                    </div>
                    <div style={{margin: '20px 0px 0px 0px', padding: '0px'}} className="progress_bar_container row">
                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 current_time">
                            <span className="current_time pull-right">{fmtMSS(currentTime)}</span>
                        </div>
                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 song_player">
                            <input
                                onDurationChange={e => changeColorBar(e)}
                                style={{marginTop: '8px', cursor: 'pointer'}}
                                className="slider"
                                onChange={handleProgress}
                                value={dur ? (currentTime * 100) / dur : 0}
                                type="range" name="progressBar" id="progressBar"/>
                        </div>
                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                            <span className="total_time pull-left">{fmtMSS(dur)}</span>
                        </div>
                    </div>
                </div>
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                    <div className="row pull-right" style={{margin: '0px 0px 0px 0px', padding: '15px 0px 0px 0px'}}>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12"
                             style={{margin: '15px 0px 15px 0px', padding: '0px'}}>
                            <FontAwesomeIcon style={{margin: '0px 30px 0px 0px', cursor: 'pointer'}} color="#9B9B9B"
                                             size="1x" icon={faRandom}/>
                            <FontAwesomeIcon style={{margin: '0px 0px 0px 0px', cursor: 'pointer'}} color="#9B9B9B"
                                             size="1x" icon={faRetweet}/>
                            <input ref={volumeBar} className="volumeSlider" orient="vertical" style={{
                                display: showVolumeBar ? 'block' : 'none',
                                position: 'absolute',
                                bottom: '20px',
                                right: '7px'
                            }} value={Math.round(volume * 100)} type="range" name="volumeBar" id="volumeBar"
                                   onChange={(e) => handleVolume(e.target.value / 100)}/>
                            <FontAwesomeIcon onClick={() => setShowVolumeBar(true)} style={{
                                margin: '0px 0px 0px 30px',
                                cursor: 'pointer',
                                position: 'relative'
                            }} color="#9B9B9B" size="1x" icon={faVolumeUp}/>
                        </div>
                    </div>
                </div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <div className="row" style={{margin: '0px 0px 0px 0px', padding: '15px 0px 10px 0px'}}>
                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8"
                             style={{margin: '2px 0px 15px 0px', padding: '0px 0px 0px 50px'}}>
                            <img alt="queue_artist_image" src={queue_artist} width="40vw"
                                 style={{borderRadius: '8px'}}/>
                        </div>
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"
                             style={{margin: '10px 0px 0px 0px', padding: '0px 5px 0px 0px'}}>
                            <span className="pull-left" style={{
                                fontSize: '15px',
                                fontFamily: 'sans-serif',
                                fontWeight: 'bold',
                                color: '#9B9B9B'
                            }}>Queue</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
