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
    faTimesCircle,
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
    const [apiData, setApiData] = useState({
        "status": "success", "message": "got data", "data": {
            "Artist": {
                "status": "success",
                "message": "got data",
                "type": "A",
                "data": [{
                    "ContentID": "7874",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/ArtistPreviewImageFile/SaintsOfValory_<$size$>.jpg",
                    "title": "Saints Of Valory",
                    "ContentType": "A",
                    "PlayUrl": "http://43.240.103.34/api.shadhin/api/artist/7874",
                    "Artist": "Saints Of Valory",
                    "Duration": "",
                    "fav": null,
                    "AlbumId": "7874",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "A",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }]
            },
            "Album": {
                "status": "success",
                "message": "got data",
                "type": "R",
                "data": [{
                    "ContentID": "17518",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AlbumPreviewImageFile/AkashValobasi_TowhidEthun_<$size$>.jpg",
                    "title": "Akash Valobasi",
                    "ContentType": "R",
                    "PlayUrl": "http://43.240.103.34/api.shadhin/api/album/17518",
                    "Artist": "Towhid Ethun",
                    "Duration": "",
                    "fav": null,
                    "AlbumId": "17518",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "R",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }, {
                    "ContentID": "17549",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AlbumPreviewImageFile/JareTomarLageValo_SathiKhan_<$size$>.jpg",
                    "title": "Jare Tomar Lage Valo",
                    "ContentType": "R",
                    "PlayUrl": "http://43.240.103.34/api.shadhin/api/album/17549",
                    "Artist": "Sathi Khan",
                    "Duration": "",
                    "fav": null,
                    "AlbumId": "17549",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "R",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }, {
                    "ContentID": "17118",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AlbumPreviewImageFile/MohammedKeValoNaBasle_AhmedSajeeb_<$size$>.jpg",
                    "title": "Mohammed Ke Valo Na Basle",
                    "ContentType": "R",
                    "PlayUrl": "http://43.240.103.34/api.shadhin/api/album/17118",
                    "Artist": "Ahmed Sajeeb",
                    "Duration": "",
                    "fav": null,
                    "AlbumId": "17118",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "R",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }, {
                    "ContentID": "16935",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AlbumPreviewImageFile/Valobasi_NolokBabuAndSaran_<$size$>.jpg",
                    "title": "Valobasi",
                    "ContentType": "R",
                    "PlayUrl": "http://43.240.103.34/api.shadhin/api/album/16935",
                    "Artist": "Nolok Babu And Saran",
                    "Duration": "",
                    "fav": null,
                    "AlbumId": "16935",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "R",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }, {
                    "ContentID": "16860",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AlbumPreviewImageFile/NamajValo_Imran_<$size$>.jpg",
                    "title": "Namaj Valo",
                    "ContentType": "R",
                    "PlayUrl": "http://43.240.103.34/api.shadhin/api/album/16860",
                    "Artist": "Imran",
                    "Duration": "",
                    "fav": null,
                    "AlbumId": "16860",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "R",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }, {
                    "ContentID": "16914",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AlbumPreviewImageFile/TorMittheValobasa_Masum_<$size$>.jpg",
                    "title": "Tor Mitthe Valobasa",
                    "ContentType": "R",
                    "PlayUrl": "http://43.240.103.34/api.shadhin/api/album/16914",
                    "Artist": "Masum",
                    "Duration": "",
                    "fav": null,
                    "AlbumId": "16914",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "R",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }, {
                    "ContentID": "16911",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AlbumPreviewImageFile/ShorbonashaValobasa_AhamedJashim_<$size$>.jpg",
                    "title": "Shorbonasha Valobasa",
                    "ContentType": "R",
                    "PlayUrl": "http://43.240.103.34/api.shadhin/api/album/16911",
                    "Artist": "Ahamed Jashim",
                    "Duration": "",
                    "fav": null,
                    "AlbumId": "16911",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "R",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }, {
                    "ContentID": "16910",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AlbumPreviewImageFile/SartherValobasa_Masum_<$size$>.jpg",
                    "title": "Sarther Valobasa",
                    "ContentType": "R",
                    "PlayUrl": "http://43.240.103.34/api.shadhin/api/album/16910",
                    "Artist": "Masum",
                    "Duration": "",
                    "fav": null,
                    "AlbumId": "16910",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "R",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }, {
                    "ContentID": "16683",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AlbumPreviewImageFile/DekhteJTuiSiliValo_BadhonRaj_<$size$>.jpg",
                    "title": "Dekhte J Tui Sili Valo",
                    "ContentType": "R",
                    "PlayUrl": "http://43.240.103.34/api.shadhin/api/album/16683",
                    "Artist": "Badhon Raj",
                    "Duration": "",
                    "fav": null,
                    "AlbumId": "16683",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "R",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }, {
                    "ContentID": "16505",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AlbumPreviewImageFile/SeToValoNoy_SharhadMahir_<$size$>.jpg",
                    "title": "Se To Valo Noy",
                    "ContentType": "R",
                    "PlayUrl": "http://43.240.103.34/api.shadhin/api/album/16505",
                    "Artist": "Sharhad Mahir",
                    "Duration": "",
                    "fav": null,
                    "AlbumId": "16505",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "R",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }, {
                    "ContentID": "16356",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AlbumPreviewImageFile/KhubValobeshechi_BelalKhan_<$size$>.jpg",
                    "title": "Khub Valobeshechi",
                    "ContentType": "R",
                    "PlayUrl": "http://43.240.103.34/api.shadhin/api/album/16356",
                    "Artist": "Belal Khan",
                    "Duration": "",
                    "fav": null,
                    "AlbumId": "16356",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "R",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }, {
                    "ContentID": "16291",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AlbumPreviewImageFile/ValobasharDiboshe_AshfaqulBariRumon_<$size$>.jpg",
                    "title": "Valobashar Diboshe",
                    "ContentType": "R",
                    "PlayUrl": "http://43.240.103.34/api.shadhin/api/album/16291",
                    "Artist": "Parthibo",
                    "Duration": "",
                    "fav": null,
                    "AlbumId": "16291",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "R",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }, {
                    "ContentID": "16313",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AlbumPreviewImageFile/OvimanraValoThakuk_AhadFahim_<$size$>.jpg",
                    "title": "Ovimanra Valo Thakuk",
                    "ContentType": "R",
                    "PlayUrl": "http://43.240.103.34/api.shadhin/api/album/16313",
                    "Artist": "Ahad Fahim",
                    "Duration": "",
                    "fav": null,
                    "AlbumId": "16313",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "R",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }, {
                    "ContentID": "16339",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AlbumPreviewImageFile/KototaJeValobashi_KaziShuvoAndPuja_<$size$>.jpg",
                    "title": "Kotota Je Valobashi",
                    "ContentType": "R",
                    "PlayUrl": "http://43.240.103.34/api.shadhin/api/album/16339",
                    "Artist": "Kazi Shuvo And Puja",
                    "Duration": "",
                    "fav": null,
                    "AlbumId": "16339",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "R",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }, {
                    "ContentID": "16261",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AlbumPreviewImageFile/AmiValoNei_SaifShuvo_<$size$>.jpg",
                    "title": "Ami Valo Nei",
                    "ContentType": "R",
                    "PlayUrl": "http://43.240.103.34/api.shadhin/api/album/16261",
                    "Artist": "Saif Shuvo",
                    "Duration": "",
                    "fav": null,
                    "AlbumId": "16261",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "R",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }, {
                    "ContentID": "16246",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AlbumPreviewImageFile/ValoManushNoy_TumpaKhan_<$size$>.jpg",
                    "title": "Valo Manush Noy",
                    "ContentType": "R",
                    "PlayUrl": "http://43.240.103.34/api.shadhin/api/album/16246",
                    "Artist": "Tumpa Khan",
                    "Duration": "",
                    "fav": null,
                    "AlbumId": "16246",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "R",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }, {
                    "ContentID": "16663",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AlbumPreviewImageFile/SokhiTorMontaValoNa_PolokHassan_<$size$>.jpg",
                    "title": "Sokhi Tor Monta Valo Na",
                    "ContentType": "R",
                    "PlayUrl": "http://43.240.103.34/api.shadhin/api/album/16663",
                    "Artist": "Polok Hassan",
                    "Duration": "",
                    "fav": null,
                    "AlbumId": "16663",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "R",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }, {
                    "ContentID": "16677",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AlbumPreviewImageFile/VebenisValoiAchi_Ayesha_<$size$>.jpg",
                    "title": "Vebenis Valoi Achi",
                    "ContentType": "R",
                    "PlayUrl": "http://43.240.103.34/api.shadhin/api/album/16677",
                    "Artist": "Ayesha",
                    "Duration": "",
                    "fav": null,
                    "AlbumId": "16677",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "R",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }, {
                    "ContentID": "16660",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AlbumPreviewImageFile/ShokhiGoAmarMonValoNa_ShilpiBiswas_<$size$>.jpg",
                    "title": "Shokhi Go Amar Mon Valo Na",
                    "ContentType": "R",
                    "PlayUrl": "http://43.240.103.34/api.shadhin/api/album/16660",
                    "Artist": "Shilpi Biswas",
                    "Duration": "",
                    "fav": null,
                    "AlbumId": "16660",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "R",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }, {
                    "ContentID": "16667",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AlbumPreviewImageFile/TomarValobasa_KZamanKayes_<$size$>.jpg",
                    "title": "Tomar Valobasa",
                    "ContentType": "R",
                    "PlayUrl": "http://43.240.103.34/api.shadhin/api/album/16667",
                    "Artist": "K Zaman Kayes",
                    "Duration": "",
                    "fav": null,
                    "AlbumId": "16667",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "R",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }, {
                    "ContentID": "16644",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AlbumPreviewImageFile/KotoValobasiBondhu_JAlam_<$size$>.jpg",
                    "title": "Koto Valobasi Bondhu",
                    "ContentType": "R",
                    "PlayUrl": "http://43.240.103.34/api.shadhin/api/album/16644",
                    "Artist": "J Alam",
                    "Duration": "",
                    "fav": null,
                    "AlbumId": "16644",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "R",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }, {
                    "ContentID": "16676",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AlbumPreviewImageFile/ValobasaValoNai_OmorSany_<$size$>.jpg",
                    "title": "Valobasa Valo Nai",
                    "ContentType": "R",
                    "PlayUrl": "http://43.240.103.34/api.shadhin/api/album/16676",
                    "Artist": "Omor Sany",
                    "Duration": "",
                    "fav": null,
                    "AlbumId": "16676",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "R",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }, {
                    "ContentID": "15668",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AlbumPreviewImageFile/Valobashi_SalSabilJhon_<$size$>.jpg",
                    "title": "Valobashi",
                    "ContentType": "R",
                    "PlayUrl": "http://43.240.103.34/api.shadhin/api/album/15668",
                    "Artist": "SalSabil Jhon",
                    "Duration": "",
                    "fav": null,
                    "AlbumId": "15668",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "R",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }, {
                    "ContentID": "15670",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AlbumPreviewImageFile/OdvutValoLaga_MouAndShan_<$size$>.jpg",
                    "title": "Odvut Valo Laga",
                    "ContentType": "R",
                    "PlayUrl": "http://43.240.103.34/api.shadhin/api/album/15670",
                    "Artist": "Mou And Shan",
                    "Duration": "",
                    "fav": null,
                    "AlbumId": "15670",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "R",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }, {
                    "ContentID": "16173",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AlbumPreviewImageFile/KiNeshaTorValobashate_SunnyAzad_<$size$>.jpg",
                    "title": "Ki Nesha Tor Valobashate",
                    "ContentType": "R",
                    "PlayUrl": "http://43.240.103.34/api.shadhin/api/album/16173",
                    "Artist": "Sunny Azad",
                    "Duration": "",
                    "fav": null,
                    "AlbumId": "16173",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "R",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }, {
                    "ContentID": "16182",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AlbumPreviewImageFile/ManusTumiValoNa_Tahmina_<$size$>.jpg",
                    "title": "Manus Tumi Valo Na",
                    "ContentType": "R",
                    "PlayUrl": "http://43.240.103.34/api.shadhin/api/album/16182",
                    "Artist": "Tahmina",
                    "Duration": "",
                    "fav": null,
                    "AlbumId": "16182",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "R",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }, {
                    "ContentID": "16202",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AlbumPreviewImageFile/ValoiLage_MahidulRaj_<$size$>.jpg",
                    "title": "Valoi Lage",
                    "ContentType": "R",
                    "PlayUrl": "http://43.240.103.34/api.shadhin/api/album/16202",
                    "Artist": "Mahidul Raj",
                    "Duration": "",
                    "fav": null,
                    "AlbumId": "16202",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "R",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }, {
                    "ContentID": "15583",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AlbumPreviewImageFile/ValobashaAmoni_RezwanSheikhAndOishorjo_<$size$>.jpg",
                    "title": "Valobasha Amoni",
                    "ContentType": "R",
                    "PlayUrl": "http://43.240.103.34/api.shadhin/api/album/15583",
                    "Artist": "Rezwan Sheikh And Oishorjo",
                    "Duration": "",
                    "fav": null,
                    "AlbumId": "15583",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "R",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }, {
                    "ContentID": "15653",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AlbumPreviewImageFile/ValoThakteDilina_Ankon_<$size$>.jpg",
                    "title": "Valo Thakte Dilina",
                    "ContentType": "R",
                    "PlayUrl": "http://43.240.103.34/api.shadhin/api/album/15653",
                    "Artist": "Ankon",
                    "Duration": "",
                    "fav": null,
                    "AlbumId": "15653",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "R",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }, {
                    "ContentID": "15654",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AlbumPreviewImageFile/ValoBashiBolboToke_SohelMehediAndUpoma_<$size$>.jpg",
                    "title": "ValoBashi Bolbo Toke",
                    "ContentType": "R",
                    "PlayUrl": "http://43.240.103.34/api.shadhin/api/album/15654",
                    "Artist": "Sohel Mehedi And Upoma",
                    "Duration": "",
                    "fav": null,
                    "AlbumId": "15654",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "R",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }]
            },
            "Track": {
                "status": "success",
                "message": "got data",
                "type": "S",
                "data": [{
                    "ContentID": "93677",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AlbumPreviewImageFile/SuperHitMovieSongsofAyubBachchu_<$size$>.jpg",
                    "title": "Tomake Valobeshe Hashi Mukhe Pari Morte",
                    "ContentType": "S",
                    "PlayUrl": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AudioMainFile/TomakeValobesheHashiMukhePariMorte_AyubBachchuAndKanakChapa.mp3",
                    "Artist": "Ayub Bachchu And Various Artists",
                    "Duration": "384",
                    "fav": null,
                    "AlbumId": "93677",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "S",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }, {
                    "ContentID": "93485",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AlbumPreviewImageFile/AkashValobasi_TowhidEthun_<$size$>.jpg",
                    "title": "Akash Valobasi",
                    "ContentType": "S",
                    "PlayUrl": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AudioMainFile/AkashValobasi_TowhidEthun.mp3",
                    "Artist": "Towhid Ethun",
                    "Duration": "256",
                    "fav": null,
                    "AlbumId": "93485",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "S",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }, {
                    "ContentID": "93531",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AlbumPreviewImageFile/JareTomarLageValo_SathiKhan_<$size$>.jpg",
                    "title": "Jare Tomar Lage Valo",
                    "ContentType": "S",
                    "PlayUrl": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AudioMainFile/JareTomarLageValo_SathiKhan.mp3",
                    "Artist": "Sathi Khan",
                    "Duration": "319",
                    "fav": null,
                    "AlbumId": "93531",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "S",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }, {
                    "ContentID": "93532",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AlbumPreviewImageFile/JareTomarLageValo_SathiKhan_<$size$>.jpg",
                    "title": "Valobashar Nesha",
                    "ContentType": "S",
                    "PlayUrl": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AudioMainFile/ValobasharNesha_SathiKhan.mp3",
                    "Artist": "Sathi Khan",
                    "Duration": "186",
                    "fav": null,
                    "AlbumId": "93532",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "S",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }, {
                    "ContentID": "93148",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AlbumPreviewImageFile/JMRMusicStudio/MethoGaan_WrongTuli_<$size$>.jpg",
                    "title": "Ami Jare Bashi Valo",
                    "ContentType": "S",
                    "PlayUrl": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AudioMainFile/JMRMusicStudio/AmiJareBashiValo_WrongTuli.mp3",
                    "Artist": "Wrong Tuli",
                    "Duration": "519",
                    "fav": null,
                    "AlbumId": "93148",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "S",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }, {
                    "ContentID": "92739",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AlbumPreviewImageFile/MohammedKeValoNaBasle_AhmedSajeeb_<$size$>.jpg",
                    "title": "Mohammed Ke Valo Na Basle",
                    "ContentType": "S",
                    "PlayUrl": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AudioMainFile/MohammedKeValoNaBasle_AhmedSajeeb.mp3",
                    "Artist": "Ahmed Sajeeb",
                    "Duration": "219",
                    "fav": null,
                    "AlbumId": "92739",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "S",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }, {
                    "ContentID": "92532",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AlbumPreviewImageFile/Valobasi_NolokBabuAndSaran_<$size$>.jpg",
                    "title": "Valobasi",
                    "ContentType": "S",
                    "PlayUrl": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AudioMainFile/Valobasi_NolokBabuAndSaran.mp3",
                    "Artist": "Nolok Babu And Saran",
                    "Duration": "286",
                    "fav": null,
                    "AlbumId": "92532",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "S",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }, {
                    "ContentID": "92441",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AlbumPreviewImageFile/NamajValo_Imran_<$size$>.jpg",
                    "title": "Namaj Valo",
                    "ContentType": "S",
                    "PlayUrl": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AudioMainFile/NamajValo_Imran.mp3",
                    "Artist": "Imran",
                    "Duration": "297",
                    "fav": null,
                    "AlbumId": "92441",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "S",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }, {
                    "ContentID": "92504",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AlbumPreviewImageFile/TorMittheValobasa_Masum_<$size$>.jpg",
                    "title": "Tor Mitthe Valobasa",
                    "ContentType": "S",
                    "PlayUrl": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AudioMainFile/TorMittheValobasa_Masum.mp3",
                    "Artist": "Masum",
                    "Duration": "290",
                    "fav": null,
                    "AlbumId": "92504",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "S",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }, {
                    "ContentID": "92501",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AlbumPreviewImageFile/ShorbonashaValobasa_AhamedJashim_<$size$>.jpg",
                    "title": "Shorbonasha Valobasa",
                    "ContentType": "S",
                    "PlayUrl": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AudioMainFile/ShorbonashaValobasa_AhamedJashim.mp3",
                    "Artist": "Ahamed Jashim",
                    "Duration": "259",
                    "fav": null,
                    "AlbumId": "92501",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "S",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }, {
                    "ContentID": "92500",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AlbumPreviewImageFile/SartherValobasa_Masum_<$size$>.jpg",
                    "title": "Sarther Valobasa",
                    "ContentType": "S",
                    "PlayUrl": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AudioMainFile/SartherValobasa_Masum.mp3",
                    "Artist": "Masum",
                    "Duration": "356",
                    "fav": null,
                    "AlbumId": "92500",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "S",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }, {
                    "ContentID": "92210",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AlbumPreviewImageFile/DekhteJTuiSiliValo_BadhonRaj_<$size$>.jpg",
                    "title": "Dekhte J Tui Sili Valo",
                    "ContentType": "S",
                    "PlayUrl": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AudioMainFile/DekhteJTuiSiliValo_BadhonRaj.mp3",
                    "Artist": "Badhon Raj",
                    "Duration": "294",
                    "fav": null,
                    "AlbumId": "92210",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "S",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }, {
                    "ContentID": "91968",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AlbumPreviewImageFile/AlauddinAlierShoroniyoGaan_VariousArtists_<$size$>.jpg",
                    "title": "Valobasha Joto Boro",
                    "ContentType": "S",
                    "PlayUrl": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AudioMainFile/ValobashaJotoBoro_KumarSanuAndMitaliMukharji.mp3",
                    "Artist": "Various Artists",
                    "Duration": "285",
                    "fav": null,
                    "AlbumId": "91968",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "S",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }, {
                    "ContentID": "91972",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AlbumPreviewImageFile/AlauddinAlierShoroniyoGaan_VariousArtists_<$size$>.jpg",
                    "title": "Valobasha Jara Oporadh Bole",
                    "ContentType": "S",
                    "PlayUrl": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AudioMainFile/ValobashaJaraOporadhBole_MitaliMukharji.mp3",
                    "Artist": "Various Artists",
                    "Duration": "294",
                    "fav": null,
                    "AlbumId": "91972",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "S",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }, {
                    "ContentID": "91981",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AlbumPreviewImageFile/AlauddinAlierShoroniyoGaan_VariousArtists_<$size$>.jpg",
                    "title": "Eto Valobeshona Amai",
                    "ContentType": "S",
                    "PlayUrl": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AudioMainFile/EtoValobeshonaAmai_ToponChowdhuryAndKanakChapa.mp3",
                    "Artist": "Various Artists",
                    "Duration": "277",
                    "fav": null,
                    "AlbumId": "91981",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "S",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }, {
                    "ContentID": "91982",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AlbumPreviewImageFile/AlauddinAlierShoroniyoGaan_VariousArtists_<$size$>.jpg",
                    "title": "Shudhu Ekbar Bolo Valobashi",
                    "ContentType": "S",
                    "PlayUrl": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AudioMainFile/ShudhuEkbarBoloValobashi_SabinaYasminAndAgun.mp3",
                    "Artist": "Various Artists",
                    "Duration": "417",
                    "fav": null,
                    "AlbumId": "91982",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "S",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }, {
                    "ContentID": "91984",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AlbumPreviewImageFile/AlauddinAlierShoroniyoGaan_VariousArtists_<$size$>.jpg",
                    "title": "Valobeshe Ontore",
                    "ContentType": "S",
                    "PlayUrl": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AudioMainFile/ValobesheOntore_KhalidHasanMiluAndSaminaChowdhury.mp3",
                    "Artist": "Various Artists",
                    "Duration": "300",
                    "fav": null,
                    "AlbumId": "91984",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "S",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }, {
                    "ContentID": "91991",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AlbumPreviewImageFile/AlauddinAlierShoroniyoGaan_VariousArtists_<$size$>.jpg",
                    "title": "Valobashar Sadh Purno Hoy Na",
                    "ContentType": "S",
                    "PlayUrl": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AudioMainFile/ValobasharSadhPurnoHoyNa_KumarSanuAndMitaliMukharji.mp3",
                    "Artist": "Various Artists",
                    "Duration": "271",
                    "fav": null,
                    "AlbumId": "91991",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "S",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }, {
                    "ContentID": "91999",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AlbumPreviewImageFile/AndrewKishoreerShoroniyoGaan_AndrewKishor_<$size$>.jpg",
                    "title": "Sobaito Valobasha Chay",
                    "ContentType": "S",
                    "PlayUrl": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AudioMainFile/SobaitoValobashaChay_AndrewKishor.mp3",
                    "Artist": "Andrew Kishor",
                    "Duration": "237",
                    "fav": null,
                    "AlbumId": "91999",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "S",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }, {
                    "ContentID": "92001",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AlbumPreviewImageFile/AndrewKishoreerShoroniyoGaan_AndrewKishor_<$size$>.jpg",
                    "title": "Kare Bole Valobasha",
                    "ContentType": "S",
                    "PlayUrl": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AudioMainFile/KareBoleValobasha_AndrewKishor.mp3",
                    "Artist": "Andrew Kishor",
                    "Duration": "279",
                    "fav": null,
                    "AlbumId": "92001",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "S",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }, {
                    "ContentID": "92079",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AlbumPreviewImageFile/PoranBondhu_VariousArtists_<$size$>.jpg",
                    "title": "Valobasha",
                    "ContentType": "S",
                    "PlayUrl": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AudioMainFile/Valobasha_Oshru.mp3",
                    "Artist": "Various Artists",
                    "Duration": "225",
                    "fav": null,
                    "AlbumId": "92079",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "S",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }, {
                    "ContentID": "91922",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AlbumPreviewImageFile/Prosthan_AjijulBashar_<$size$>.jpg",
                    "title": "Prostabito Valobasha",
                    "ContentType": "S",
                    "PlayUrl": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AudioMainFile/ProstabitoValobasha_AjijulBashar.mp3",
                    "Artist": "Ajijul Bashar",
                    "Duration": "96",
                    "fav": null,
                    "AlbumId": "91922",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "S",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }, {
                    "ContentID": "91942",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AlbumPreviewImageFile/KandePoran_VariousArtists_<$size$>.jpg",
                    "title": "Valobasha Koto Maya",
                    "ContentType": "S",
                    "PlayUrl": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AudioMainFile/ValobashaKotoMaya_KaziRanaAndJui.mp3",
                    "Artist": "Various Artists",
                    "Duration": "272",
                    "fav": null,
                    "AlbumId": "91942",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "S",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }, {
                    "ContentID": "91949",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AlbumPreviewImageFile/MonKobita_VariousArtists_<$size$>.jpg",
                    "title": "Tumi Amar Valobasa",
                    "ContentType": "S",
                    "PlayUrl": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AudioMainFile/TumiAmarValobasa_NasirHossainAndShamimaShimu.mp3",
                    "Artist": "Various Artists",
                    "Duration": "238",
                    "fav": null,
                    "AlbumId": "91949",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "S",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }, {
                    "ContentID": "91965",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AlbumPreviewImageFile/NirobeTumiEle_VariousArtists_<$size$>.jpg",
                    "title": "Valobashi",
                    "ContentType": "S",
                    "PlayUrl": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AudioMainFile/Valobashi_NusratPapri.mp3",
                    "Artist": "Various Artists",
                    "Duration": "258",
                    "fav": null,
                    "AlbumId": "91965",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "S",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }, {
                    "ContentID": "91697",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AlbumPreviewImageFile/SeToValoNoy_SharhadMahir_<$size$>.jpg",
                    "title": "Se To Valo Noy",
                    "ContentType": "S",
                    "PlayUrl": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AudioMainFile/SeToValoNoy_SharhadMahir.mp3",
                    "Artist": "Sharhad Mahir",
                    "Duration": "178",
                    "fav": null,
                    "AlbumId": "91697",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "S",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }, {
                    "ContentID": "91164",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AlbumPreviewImageFile/KhubValobeshechi_BelalKhan_<$size$>.jpg",
                    "title": "Khub Valobeshechi",
                    "ContentType": "S",
                    "PlayUrl": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AudioMainFile/KhubValobeshechi_BelalKhan.mp3",
                    "Artist": "Belal Khan",
                    "Duration": "245",
                    "fav": null,
                    "AlbumId": "91164",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "S",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }, {
                    "ContentID": "91090",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AlbumPreviewImageFile/ValobasharDiboshe_AshfaqulBariRumon_<$size$>.jpg",
                    "title": "Valobashar Diboshe",
                    "ContentType": "S",
                    "PlayUrl": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AudioMainFile/ValobasharDiboshe_AshfaqulBariRumon.mp3",
                    "Artist": "Parthibo",
                    "Duration": "282",
                    "fav": null,
                    "AlbumId": "91090",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "S",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }, {
                    "ContentID": "91112",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AlbumPreviewImageFile/OvimanraValoThakuk_AhadFahim_<$size$>.jpg",
                    "title": "Ovimanra Valo Thakuk",
                    "ContentType": "S",
                    "PlayUrl": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AudioMainFile/OvimanraValoThakuk_AhadFahim.mp3",
                    "Artist": "Ahad Fahim",
                    "Duration": "242",
                    "fav": null,
                    "AlbumId": "91112",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "S",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }, {
                    "ContentID": "91138",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AlbumPreviewImageFile/KototaJeValobashi_KaziShuvoAndPuja_<$size$>.jpg",
                    "title": "Kotota Je Valobashi",
                    "ContentType": "S",
                    "PlayUrl": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/AudioMainFile/KototaJeValobashi_KaziShuvoAndPuja.mp3",
                    "Artist": "Kazi Shuvo And Puja",
                    "Duration": "274",
                    "fav": null,
                    "AlbumId": "91138",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "S",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }]
            },
            "Video": {
                "status": "success",
                "message": "got data",
                "type": "V",
                "data": [{
                    "ContentID": "92504",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/VideoPreview/TorMittheValobasa_Masum_1280.jpg",
                    "title": "Tor Mitthe Valobasa",
                    "ContentType": "V",
                    "PlayUrl": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/VideoMainFile/TorMittheValobasa_Masum.mp4",
                    "Artist": "Masum",
                    "Duration": "290",
                    "fav": null,
                    "AlbumId": "92504",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "V",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }, {
                    "ContentID": "91164",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/VideoPreview/KhubValobeshechi_BelalKhan_1280.jpg",
                    "title": "Khub Valobeshechi",
                    "ContentType": "V",
                    "PlayUrl": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/VideoMainFile/KhubValobeshechi_BelalKhan.mp4",
                    "Artist": "Belal Khan",
                    "Duration": "245",
                    "fav": null,
                    "AlbumId": "91164",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "V",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }, {
                    "ContentID": "91138",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/VideoPreview/KototaJeValobashi_KaziShuvoAndPuja_1280.jpg",
                    "title": "Kotota Je Valobashi",
                    "ContentType": "V",
                    "PlayUrl": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/VideoMainFile/KototaJeValobashi_KaziShuvoAndPuja.mp4",
                    "Artist": "Kazi Shuvo And Puja",
                    "Duration": "274",
                    "fav": null,
                    "AlbumId": "91138",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "V",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }, {
                    "ContentID": "90088",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/VideoPreview/OdvutValoLaga_MouAndShan_1280.jpg",
                    "title": "Odvut Valo Laga",
                    "ContentType": "V",
                    "PlayUrl": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/VideoMainFile/OdvutValoLaga_MouAndShan.mp4",
                    "Artist": "Mou And Shan",
                    "Duration": "315",
                    "fav": null,
                    "AlbumId": "90088",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "V",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }, {
                    "ContentID": "90970",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/VideoPreview/ValoiLage_MahidulRaj_1280.jpg",
                    "title": "Valoi Lage",
                    "ContentType": "V",
                    "PlayUrl": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/VideoMainFile/ValoiLage_MahidulRaj.mp4",
                    "Artist": "Mahidul Raj",
                    "Duration": "292",
                    "fav": null,
                    "AlbumId": "90970",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "V",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }, {
                    "ContentID": "90950",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/VideoPreview/ManusTumiValoNa_Tahmina_1280.jpg",
                    "title": "Manus Tumi Valo Na",
                    "ContentType": "V",
                    "PlayUrl": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/VideoMainFile/ManusTumiValoNa_Tahmina.mp4",
                    "Artist": "Tahmina",
                    "Duration": "257",
                    "fav": null,
                    "AlbumId": "90950",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "V",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }, {
                    "ContentID": "90941",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/VideoPreview/KiNesha_SunnyAzad_1280.jpg",
                    "title": "Ki Nesha Tor Valobashate",
                    "ContentType": "V",
                    "PlayUrl": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/VideoMainFile/KiNesha_SunnyAzad.mp4",
                    "Artist": "Sunny Azad",
                    "Duration": "309",
                    "fav": null,
                    "AlbumId": "90941",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "V",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }, {
                    "ContentID": "89015",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/VideoPreview/ValobasiTomake_ShawonGaanwalaAndPuja_1280.jpg",
                    "title": "Valobasi Tomake",
                    "ContentType": "V",
                    "PlayUrl": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/VideoMainFile/ValobasiTomake_ShawonGaanwalaAndPuja.mp4",
                    "Artist": "Shawon Gaanwala And Puja",
                    "Duration": "289",
                    "fav": null,
                    "AlbumId": "89015",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "V",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }, {
                    "ContentID": "88991",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/VideoPreview/ValobashaPremPiriti_KamruzzamanRabbi_1280.jpg",
                    "title": "Valobasha Prem Piriti",
                    "ContentType": "V",
                    "PlayUrl": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/VideoMainFile/ValobashaPremPiriti_KamruzzamanRabbi.mp4",
                    "Artist": "Kamruzzaman Rabbi",
                    "Duration": "386",
                    "fav": null,
                    "AlbumId": "88991",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "V",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }, {
                    "ContentID": "88964",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/VideoPreview/KotoValobashiTore_KaziShuvo_1280.jpg",
                    "title": "Koto Valobashi Tore",
                    "ContentType": "V",
                    "PlayUrl": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/VideoMainFile/KotoValobashiTore_KaziShuvo.mp4",
                    "Artist": "Kazi Shuvo",
                    "Duration": "273",
                    "fav": null,
                    "AlbumId": "88964",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "V",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }, {
                    "ContentID": "86971",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/VideoPreview/ValobashaValoThakteDilona_SafayetHossain_1280.jpg",
                    "title": "Valobasha Valo Thakte Dilona",
                    "ContentType": "V",
                    "PlayUrl": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/VideoMainFile/ValobashaValoThakteDilona_SafayetHossain.mp4",
                    "Artist": "Various Artists",
                    "Duration": "333",
                    "fav": null,
                    "AlbumId": "86971",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "V",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }, {
                    "ContentID": "86347",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/VideoPreview/MonValoHoyeJay_TahsinAhmed_1280.jpg",
                    "title": "Mon Valo Hoye Jay",
                    "ContentType": "V",
                    "PlayUrl": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/VideoMainFile/MonValoHoyeJay_TahsinAhmed.mp4",
                    "Artist": "Tahsin Ahmed",
                    "Duration": "258",
                    "fav": null,
                    "AlbumId": "86347",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "V",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }, {
                    "ContentID": "86278",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/VideoPreview/TokeBasteValo_Mehedi_1280.jpg",
                    "title": "Toke Baste Valo",
                    "ContentType": "V",
                    "PlayUrl": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/VideoMainFile/TokeBasteValo_Mehedi.mp4",
                    "Artist": "Mehedi",
                    "Duration": "269",
                    "fav": null,
                    "AlbumId": "86278",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "V",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }, {
                    "ContentID": "86266",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/VideoPreview/AmarValobashayTumi_RobiKishor_1280.jpg",
                    "title": "Amar Valobashay Tumi",
                    "ContentType": "V",
                    "PlayUrl": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/VideoMainFile/AmarValobashayTumi_RobiKishor.mp4",
                    "Artist": "Robi Kishor",
                    "Duration": "289",
                    "fav": null,
                    "AlbumId": "86266",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "V",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }, {
                    "ContentID": "86111",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/VideoPreview/MonHoyeJayValo_AsifAndDoliSayantoni_1280.jpg",
                    "title": "Mon Hoye Jay Valo",
                    "ContentType": "V",
                    "PlayUrl": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/VideoMainFile/MonHoyeJayValo_AsifAndDoliSayantoni.mp4",
                    "Artist": "Asif And Doli Sayantoni",
                    "Duration": "245",
                    "fav": null,
                    "AlbumId": "86111",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "V",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }, {
                    "ContentID": "87839",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/VideoPreview/JotoDekhiTotoValolage_AndrewKishorAndSabinaYasmin_1280.jpg",
                    "title": "Joto Dekhi Toto Valo lage",
                    "ContentType": "V",
                    "PlayUrl": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/VideoMainFile/JotoDekhiTotoValolage_AndrewKishorAndSabinaYasmin.mp4",
                    "Artist": "Various Artists",
                    "Duration": "306",
                    "fav": null,
                    "AlbumId": "87839",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "V",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }]
            },
            "PodcastShow": {
                "status": "success",
                "message": "got data",
                "type": "PS",
                "data": [{
                    "ContentID": "1007",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/Podcast/AlbumPreview/Show_Secrets_<$size$>.jpg",
                    "title": "সিক্রেটস",
                    "ContentType": "PDSC",
                    "PlayUrl": null,
                    "Artist": "RJ Kebria",
                    "Duration": "",
                    "fav": null,
                    "AlbumId": "1007",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "PS",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }]
            },
            "PodcastEpisode": {
                "status": "success",
                "message": "got data",
                "type": "PE",
                "data": [{
                    "ContentID": "8051",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/Podcast/AlbumPreview/Secrets_EP66_Dalia_<$size$>.jpg",
                    "title": "এপিসোড ৬৬",
                    "ContentType": "PDSC",
                    "PlayUrl": null,
                    "Artist": "",
                    "Duration": "",
                    "fav": null,
                    "AlbumId": "8051",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "PS",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }, {
                    "ContentID": "8040",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/Podcast/AlbumPreview/Secrets_EP78_Dolly_<$size$>.jpg",
                    "title": "এপিসোড ৭৮",
                    "ContentType": "PDSC",
                    "PlayUrl": null,
                    "Artist": "",
                    "Duration": "",
                    "fav": null,
                    "AlbumId": "8040",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "PS",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }, {
                    "ContentID": "8039",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/Podcast/AlbumPreview/Secrets_EP79_DelowarHossain_<$size$>.jpg",
                    "title": "এপিসোড ৭৯",
                    "ContentType": "PDSC",
                    "PlayUrl": null,
                    "Artist": "",
                    "Duration": "",
                    "fav": null,
                    "AlbumId": "8039",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "PS",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }]
            },
            "PodcastTrack": {
                "status": "success",
                "message": "got data",
                "type": "PT",
                "data": [{
                    "ContentID": "9039",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/Podcast/AlbumPreview/Secrets_EP78_Dolly_<$size$>.jpg",
                    "title": "ভালোবাসার প্রমান দিতে এসব করেছি। মোহের মধ্যে থাকলে মানুষ যা করে।",
                    "ContentType": "PDSC",
                    "PlayUrl": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/Podcast/AudioFile/Secrets_EP78_Dolly.mp3",
                    "Artist": "RJ Kebria",
                    "Duration": "01h 54m 51",
                    "fav": null,
                    "AlbumId": "9039",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "PS",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }, {
                    "ContentID": "9040",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/Podcast/AlbumPreview/Secrets_EP77_Sultan_<$size$>.jpg",
                    "title": "টিপ চাকু নিয়ে ঘুরতাম। সাথে চাকু পিস্তল এসব না থাকলে আমার ভালো লাগতো না।",
                    "ContentType": "PDSC",
                    "PlayUrl": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/Podcast/AudioFile/Secrets_EP77_Sultan.mp3",
                    "Artist": "RJ Kebria",
                    "Duration": "01h 31m 16",
                    "fav": null,
                    "AlbumId": "9040",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "PS",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }, {
                    "ContentID": "9050",
                    "image": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/Podcast/AlbumPreview/Secrets_EP66_Dalia_<$size$>.jpg",
                    "title": "লোকটা ভালোই ছিল। শুধু ছিল ভালোবাসার অভাব। তাতেই আমার এই ভুল।",
                    "ContentType": "PDSC",
                    "PlayUrl": "https://shadhin.s3-ap-southeast-1.amazonaws.com/upload2/Batch/Podcast/AudioFile/Secrets_EP66_Dalia.mp3",
                    "Artist": "RJ Kebria",
                    "Duration": "01h 23m 26",
                    "fav": null,
                    "AlbumId": "9050",
                    "ArtistId": null,
                    "Banner": null,
                    "NewBanner": null,
                    "PlayCount": 0,
                    "Type": "PS",
                    "IsPaid": false,
                    "Seekable": false,
                    "TrackType": null
                }]
            }
        }
    });
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
    const [isClicked, setIsClicked] = useState({'home': true, 'music': false, 'podcast': false, 'video': false});
    const timeFormatter = (s) => {
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
        console.log('Song')
    };

    const togglePlaying = () => {
        console.log('Playing')
    };

    const toggleRandom = () => {
        console.log('TOGGLE')
    };

    const toggleRepeat = () => {
        console.log('Repeat')
    };

    const changeColorBar = (e) => {
        e.preventDefault();
        e.target.style.background = 'linear-gradient(to right, #82CFD0 0%, #82CFD0 ' + e.target.value + '%, #fff ' + e.target.value + '%, white 100%)'
    };

    const handleMenuClick = (e) => {
        e.preventDefault();
        Object.keys(isClicked).map(item => {
            if (e.target.id === 'home') {
                setIsClicked({...isClicked, 'home': true, 'music': false, 'podcast': false, 'video': false});
            } else if (e.target.id === 'music') {
                setIsClicked({...isClicked, 'home': false, 'music': true, 'podcast': false, 'video': false});
            } else if (e.target.id === 'podcast') {
                setIsClicked({...isClicked, 'home': false, 'music': false, 'podcast': true, 'video': false});
            } else if (e.target.id === 'video') {
                setIsClicked({...isClicked, 'home': false, 'music': false, 'podcast': false, 'video': true});
            }
        });
    };

    const handleProgress = (e) => {
        let compute = (e.target.value * dur) / 100;
        setCurrentTime(compute);
        audio.current.currentTime = compute;

    };

    const handleEnd = () => {
        console.log('END');
        setPlaying(false);
    };

    // useEffect(() => {
    //     audio.current.volume = volume;
    //     if (playing) {
    //         toggleAudio()
    //     }
    // }, [currSong]);

    useEffect(() => {
        // getData();
        getDataLocal();
        // document.addEventListener('mousedown', handleClickOutside, false)
    }, []);


    const getDataLocal = () => {
        let album = apiData.data.Album.data;
        let artist = apiData.data.Artist.data;
        let track = apiData.data.Track.data;
        let video = apiData.data.Video.data;
        let podcast_show = apiData.data.PodcastShow.data;
        let podcast_episode = apiData.data.PodcastEpisode.data;
        let podcast_track = apiData.data.PodcastTrack.data;

        let data = album.concat(artist).concat(track).concat(video).concat(podcast_show).concat(podcast_episode).concat(podcast_track);
        let required_data = data.map((item, index) => {
            let temp = {};
            temp['artist'] = item.Artist;
            temp['image'] = item.image.replace("<$size$>", "300");
            temp['title'] = item.title;
            temp['content_id'] = item.ContentID;
            temp['unique_name'] = item.Artist + ' - ' + item.title;
            return temp
        });
        let unique_data = required_data.filter((item, index, self) =>
            index === self.findIndex((t) => (
                t.title === item.title && t.artist === item.artist
            ))
        );
        setData(unique_data);
        setSearchData(unique_data);
    };

    const selectSuggestion = (suggestion) => {
        let suggestion_data = suggestion.artist + ' - ' + suggestion.title;
        setSearchInput(suggestion_data);
    };

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
                temp['unique_name'] = item.Artist + ' - ' + item.title;
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

    const closeSuggestion = () => {
        setSearchInput("");
    };

    const handleSearch = (e) => {
        e.preventDefault();
        let search_data = e.target.value;
        setSearchInput(search_data);
        if (search_data && searchData.length > 0) {
            const searchedData = searchData.filter(item => {
                if (item.unique_name.toLowerCase().includes(search_data.toLowerCase())) {
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
                <div style={{
                    borderRight: '1px solid #f0f0f0',
                    padding: '10px 0px 0px 20px',
                    margin: '0px',
                    backgroundColor: 'white'
                }}
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
                            <FontAwesomeIcon color={isClicked['home'] ? '#00A1FF' : '#9B9B9B'} size="lg" icon={faHome}/>
                        </div>
                        <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9" style={{paddingLeft: '0px'}}>
                            <span id="home" onClick={e => handleMenuClick(e)} style={{
                                fontSize: '20px',
                                fontWeight: 'normal',
                                color: isClicked['home'] ? '#00A1FF' : '#9B9B9B'
                            }}
                                  className="pull-left">Home</span>
                        </div>
                    </div>
                    <div className="row" style={{marginTop: '10px', cursor: 'pointer'}}>
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3" style={{padding: '3px 0px 0px 0px'}}>
                            <FontAwesomeIcon color={isClicked['music'] ? '#00A1FF' : '#9B9B9B'} size="lg"
                                             icon={faMusic}/>
                        </div>
                        <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9" style={{paddingLeft: '0px'}}>
                            <span id="music" onClick={e => handleMenuClick(e)} style={{
                                fontSize: '20px',
                                fontWeight: 'normal',
                                color: isClicked['music'] ? '#00A1FF' : '#9B9B9B'
                            }}
                                  className="pull-left">My Music</span>
                        </div>
                    </div>
                    <div className="row" style={{marginTop: '10px', cursor: 'pointer'}}>
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3" style={{padding: '3px 0px 0px 0px'}}>
                            <FontAwesomeIcon color={isClicked['podcast'] ? '#00A1FF' : '#9B9B9B'} size="lg"
                                             icon={faPodcast}/>
                        </div>
                        <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9" style={{paddingLeft: '0px'}}>
                            <span id="podcast" onClick={e => handleMenuClick(e)} style={{
                                fontSize: '20px',
                                fontWeight: 'normal',
                                color: isClicked['podcast'] ? '#00A1FF' : '#9B9B9B'
                            }}
                                  className="pull-left">Podcast</span>
                        </div>
                    </div>
                    <div className="row" style={{marginTop: '10px', cursor: 'pointer'}}>
                        <div className="col-xs-4 col-sm-3 col-md-3 col-lg-3" style={{padding: '3px 0px 0px 0px'}}>
                            <FontAwesomeIcon color={isClicked['video'] ? '#00A1FF' : '#9B9B9B'} size="lg"
                                             icon={faPlayCircle}/>
                        </div>
                        <div className="col-xs-8 col-sm-9 col-md-9 col-lg-9" style={{paddingLeft: '0px'}}>
                            <span id="video" onClick={e => handleMenuClick(e)} style={{
                                fontSize: '20px',
                                fontWeight: 'normal',
                                color: isClicked['video'] ? '#00A1FF' : '#9B9B9B'
                            }}
                                  className="pull-left">Video</span>
                        </div>
                    </div>
                    <div id="pro_gradient" style={{
                        padding: '0px',
                        margin: '25px 20px 0px 0px',
                        borderRadius: '10px',
                        height: 'auto',
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
                                <button style={{borderRadius: '10px', whiteSpace: 'normal', margin: '0px 0px 15px 0px'}}
                                        type="button"
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
                            <img style={{paddingRight: '20px'}} className="img-responsive" alt="playstore"
                                 src={playStore}/>
                        </div>
                    </div>
                    <div className="row" style={{padding: '10px 0px 50px 0px', cursor: 'pointer'}}>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <img style={{paddingRight: '20px'}} className="img-responsive" alt="applestore"
                                 src={appleStore}/>
                        </div>
                    </div>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                </div>
                <div style={{padding: '0px'}} className="col-xs-9 col-sm-10 col-md-10 col-lg-10">
                    <div style={{
                        padding: '20px 0px 10px 0px',
                        margin: '0px',
                        borderBottom: '1px solid white',
                        backgroundColor: 'white'
                    }}
                         className="row">
                        <div style={{margin: '0px', padding: '0px 0px 0px 20px', cursor: 'pointer'}}
                             className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                            <FontAwesomeIcon className="pull-left" style={{margin: '8px 0px 0px 10px'}} color="#9B9B9B"
                                             size="lg" icon={faSearch}/>
                        </div>
                        <div style={{margin: '0px', padding: '0px'}} className={searchInput.length > 0?'col-xs-5 col-sm-7 col-md-7 col-lg-7': 'col-xs-6 col-sm-8 col-md-8 col-lg-8'}>
                            <input autoFocus
                                   onChange={e => handleSearch(e)}
                                   value={searchInput}
                                   style={{
                                       border: 'none',
                                       outline: 'none',
                                       boxShadow: 'none',
                                       caretColor: '#00A1FF',
                                       postion: 'relative',
                                       padding: '0px 0px 0px 0px'
                                   }}
                                   type="text" className="form-control" aria-label="search"
                                   placeholder="Search artists, songs, videos..."
                                   aria-describedby="search"/>
                            <div style={{
                                position: 'absolute',
                                backgroundColor: 'white',
                                width: '100%',
                                top: '45px',
                                left: '-25px',
                                zIndex: ' 10'
                            }} className="row">
                                {data && data.length > 0 && searchInput.length > 0 ?
                                    data.map((item, index) => {
                                        return (<div key={index} style={{padding: '10px 0px', cursor: 'pointer'}}
                                                    onClick={() => selectSuggestion(item)} className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <div style={{margin: '0px', padding: '0px'}} className="row">
                                                <div style={{padding: '5px 0px 0px 10px', margin: '0px'}}
                                                     className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                                                    <img className="pull-right img-responsive" alt="album_img"
                                                         src={item.image} style={{borderRadius: '6px', width: '40px'}}/>
                                                </div>
                                                <div style={{padding: '0px 0px 0px 20px', margin: '0px'}}
                                                     className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                                                    <span className="pull-left" style={{
                                                        fontSize: '18px',
                                                        fontWeight: 'normal',
                                                        color: searchInput === item.unique_name?'#00A1FF':'black',
                                                        marginTop: '10px'
                                                    }}>{item.artist} - {item.title}</span>
                                                </div>
                                            </div>

                                        </div>)
                                    }) : ""}
                            </div>
                        </div>
                        <div style={{
                            margin: '0px',
                            padding: '0px 0px 0px 0px',
                            cursor: 'pointer',
                            display: searchInput.length > 0 ? 'block' : 'none'
                        }}
                             className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                            <FontAwesomeIcon onClick={closeSuggestion} className="pull-left"
                                             style={{margin: '8px 0px 0px 0px'}} color="#9B9B9B"
                                             size="lg" icon={faTimesCircle}/>
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
                    <div className="row"
                         style={{padding: '0px', margin: '0px', backgroundColor: '#f0f0f0', width: '100%'}}>
                        <div style={{padding: '15px 0px 15px 10px'}}
                             className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <span className="pull-left" style={{
                                fontWeight: 'normal',
                                color: 'black',
                                fontFamily: 'sans-serif',
                                fontSize: '35px'
                            }}>Top Picks</span>
                        </div>
                        <div style={{ 'cursor': 'pointer' }} className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
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
                        <div style={{margin: '50px 0px 20px 0px'}} className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <span className="pull-left" style={{
                                fontWeight: 'normal',
                                color: 'black',
                                fontFamily: 'sans-serif',
                                fontSize: '35px'
                            }}>Artists</span>
                        </div>
                        <div style={{ 'cursor': 'pointer' }} className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
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
                                    <h3 style={{
                                        fontWeight: 'normal',
                                        fontFamily: 'sans-serif',
                                        color: 'black',
                                        paddingLeft: '20px'
                                    }}>Hridoy Khan</h3>
                                    <h5 style={{fontWeight: 'normal', fontFamily: 'sans-serif', color: '#9B9B9B'}}>0000
                                        fans</h5>
                                </div>
                                <div className="item">
                                    <img style={{borderRadius: '50%', width: '100%'}} alt="artists" src={artist2}/>
                                    <h3 style={{
                                        fontWeight: 'normal',
                                        fontFamily: 'sans-serif',
                                        color: 'black',
                                        paddingLeft: '20px'
                                    }}>Asif</h3>
                                    <h5 style={{fontWeight: 'normal', fontFamily: 'sans-serif', color: '#9B9B9B'}}>0000
                                        fans</h5>
                                </div>
                                <div className="item">
                                    <img style={{borderRadius: '50%', width: '100%'}} alt="artists" src={artist3}/>
                                    <h3 style={{
                                        fontWeight: 'normal',
                                        fontFamily: 'sans-serif',
                                        color: 'black',
                                        paddingLeft: '20px'
                                    }}>Habib Wahid</h3>
                                    <h5 style={{fontWeight: 'normal', fontFamily: 'sans-serif', color: '#9B9B9B'}}>0000
                                        fans</h5>
                                </div>
                                <div className="item">
                                    <img style={{borderRadius: '50%', width: '100%'}} alt="artists" src={artist4}/>
                                    <h3 style={{
                                        fontWeight: 'normal',
                                        fontFamily: 'sans-serif',
                                        color: 'black',
                                        paddingLeft: '20px'
                                    }}>Imran</h3>
                                    <h5 style={{fontWeight: 'normal', fontFamily: 'sans-serif', color: '#9B9B9B'}}>0000
                                        fans</h5>
                                </div>
                            </OwlCarousel>
                        </div>
                        <div style={{margin: '40px 0px 20px 0px'}} className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <span className="pull-left" style={{
                                fontWeight: 'normal',
                                color: 'black',
                                fontFamily: 'sans-serif',
                                fontSize: '35px'
                            }}>Recently Played</span>
                        </div>
                        <div style={{ 'cursor': 'pointer' }} className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
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
                                    <img style={{borderRadius: '10px', width: '100%'}} alt="recently_played"
                                         src={recently_played_1}/>
                                    <h3 className="pull-left" style={{
                                        fontWeight: 'normal',
                                        fontFamily: 'sans-serif',
                                        color: 'black',
                                        marginBottom: '0px'
                                    }}>Cats and music</h3>
                                    <h5 className="pull-left" style={{
                                        fontWeight: 'normal',
                                        fontFamily: 'sans-serif',
                                        color: '#9B9B9B'
                                    }}>Artist name goes here</h5>
                                </div>
                                <div className="item">
                                    <img style={{borderRadius: '10px', width: '100%'}} alt="recently_played"
                                         src={recently_played_2}/>
                                    <h3 className="pull-left" style={{
                                        fontWeight: 'normal',
                                        fontFamily: 'sans-serif',
                                        color: 'black',
                                        marginBottom: '0px'
                                    }}>Music Name</h3>
                                    <h5 className="pull-left" style={{
                                        fontWeight: 'normal',
                                        fontFamily: 'sans-serif',
                                        color: '#9B9B9B'
                                    }}>Artist name goes here</h5>
                                </div>
                                <div className="item">
                                    <img style={{borderRadius: '10px', width: '100%'}} alt="recently_played"
                                         src={recently_played_3}/>
                                    <h3 className="pull-left" style={{
                                        fontWeight: 'normal',
                                        fontFamily: 'sans-serif',
                                        color: 'black',
                                        marginBottom: '0px'
                                    }}>Music Name</h3>
                                    <h5 className="pull-left" style={{
                                        fontWeight: 'normal',
                                        fontFamily: 'sans-serif',
                                        color: '#9B9B9B'
                                    }}>Artist name goes here</h5>
                                </div>
                                <div className="item">
                                    <img style={{borderRadius: '10px', width: '100%'}} alt="recently_played"
                                         src={recently_played_4}/>
                                    <h3 className="pull-left" style={{
                                        fontWeight: 'normal',
                                        fontFamily: 'sans-serif',
                                        color: 'black',
                                        marginBottom: '0px'
                                    }}>Music Name</h3>
                                    <h5 className="pull-left" style={{
                                        fontWeight: 'normal',
                                        fontFamily: 'sans-serif',
                                        color: '#9B9B9B'
                                    }}>Artist name goes here</h5>
                                </div>
                            </OwlCarousel>
                        </div>
                        <div style={{margin: '40px 0px 20px 0px'}} className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <span className="pull-left" style={{
                                fontWeight: 'normal',
                                color: 'black',
                                fontFamily: 'sans-serif',
                                fontSize: '35px'
                            }}>Featured Playlist</span>
                        </div>
                        <div style={{ 'cursor': 'pointer' }} className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
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
                                    <img style={{borderRadius: '10px', width: '100%'}} alt="featured_playlist"
                                         src={f_playlist1}/>
                                </div>
                                <div className="item">
                                    <img style={{borderRadius: '10px', width: '100%'}} alt="featured_playlist"
                                         src={f_playlist2}/>
                                </div>
                                <div className="item">
                                    <img style={{borderRadius: '10px', width: '100%'}} alt="featured_playlist"
                                         src={f_playlist3}/>
                                </div>
                                <div className="item">
                                    <img style={{borderRadius: '10px', width: '100%'}} alt="featured_playlist"
                                         src={f_playlist4}/>
                                </div>
                            </OwlCarousel>
                        </div>
                        <div style={{margin: '40px 0px 20px 0px'}} className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <span className="pull-left" style={{
                                fontWeight: 'normal',
                                color: 'black',
                                fontFamily: 'sans-serif',
                                fontSize: '35px'
                            }}>Popular Playlist</span>
                        </div>
                        <div style={{ 'cursor': 'pointer' }} className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
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
                                    <img style={{borderRadius: '10px', width: '100%'}} alt="popular_playlist"
                                         src={p_playlist1}/>
                                </div>
                                <div className="item">
                                    <img style={{borderRadius: '10px', width: '100%'}} alt="popular_playlist"
                                         src={p_playlist2}/>
                                </div>
                                <div className="item">
                                    <img style={{borderRadius: '10px', width: '100%'}} alt="popular_playlist"
                                         src={p_playlist3}/>
                                </div>
                                <div className="item">
                                    <img style={{borderRadius: '10px', width: '100%'}} alt="popular_playlist"
                                         src={p_playlist4}/>
                                </div>
                            </OwlCarousel>
                        </div>
                        <div style={{margin: '40px 0px 20px 0px'}} className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <span className="pull-left" style={{
                                fontWeight: 'normal',
                                color: 'black',
                                fontFamily: 'sans-serif',
                                fontSize: '35px'
                            }}>Made for you</span>
                        </div>
                        <div style={{ 'cursor': 'pointer' }} className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
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
                                    <img style={{borderRadius: '10px', width: '100%'}} alt="made_for_you_albums"
                                         src={mfy1}/>
                                    <h3 className="pull-left"
                                        style={{fontWeight: 'normal', fontFamily: 'sans-serif', color: '#9B9B9B'}}>My
                                        Favourites</h3>
                                </div>
                                <div className="item">
                                    <img style={{borderRadius: '10px', width: '100%'}} alt="made_for_you_albums"
                                         src={mfy2}/>
                                    <h3 className="pull-left"
                                        style={{fontWeight: 'normal', fontFamily: 'sans-serif', color: '#9B9B9B'}}>Mix
                                        International Hitz</h3>
                                </div>
                                <div className="item">
                                    <img style={{borderRadius: '10px', width: '100%'}} alt="made_for_you_albums"
                                         src={mfy3}/>
                                    <h3 className="pull-left" style={{
                                        fontWeight: 'normal',
                                        fontFamily: 'sans-serif',
                                        color: '#9B9B9B'
                                    }}>Summer Vides</h3>
                                </div>

                            </OwlCarousel>
                        </div>
                        <div style={{margin: '40px 0px 20px 0px'}} className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <span className="pull-left" style={{
                                fontWeight: 'normal',
                                color: 'black',
                                fontFamily: 'sans-serif',
                                fontSize: '35px'
                            }}>Trending Now</span>
                        </div>
                        <div style={{ 'cursor': 'pointer' }} className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
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
                                    <img style={{borderRadius: '10px', width: '100%'}} alt="trending_now"
                                         src={trending1}/>
                                    <h3 className="pull-left" style={{
                                        fontWeight: 'normal',
                                        fontFamily: 'sans-serif',
                                        color: 'black',
                                        marginBottom: '0px'
                                    }}>Cats and music</h3>
                                    <h5 className="pull-left" style={{
                                        fontWeight: 'normal',
                                        fontFamily: 'sans-serif',
                                        color: '#9B9B9B'
                                    }}>Artist name goes here</h5>
                                </div>
                                <div className="item">
                                    <img style={{borderRadius: '10px', width: '100%'}} alt="trending_now"
                                         src={trending2}/>
                                    <h3 className="pull-left" style={{
                                        fontWeight: 'normal',
                                        fontFamily: 'sans-serif',
                                        color: 'black',
                                        marginBottom: '0px'
                                    }}>Music Name</h3>
                                    <h5 className="pull-left" style={{
                                        fontWeight: 'normal',
                                        fontFamily: 'sans-serif',
                                        color: '#9B9B9B'
                                    }}>Artist name goes here</h5>
                                </div>
                                <div className="item">
                                    <img style={{borderRadius: '10px', width: '100%'}} alt="trending_now"
                                         src={trending3}/>
                                    <h3 className="pull-left" style={{
                                        fontWeight: 'normal',
                                        fontFamily: 'sans-serif',
                                        color: 'black',
                                        marginBottom: '0px'
                                    }}>Music Name</h3>
                                    <h5 className="pull-left" style={{
                                        fontWeight: 'normal',
                                        fontFamily: 'sans-serif',
                                        color: '#9B9B9B'
                                    }}>Artist name goes here</h5>
                                </div>
                                <div className="item">
                                    <img style={{borderRadius: '10px', width: '100%'}} alt="trending_now"
                                         src={trending4}/>
                                    <h3 className="pull-left" style={{
                                        fontWeight: 'normal',
                                        fontFamily: 'sans-serif',
                                        color: 'black',
                                        marginBottom: '0px'
                                    }}>Music Name</h3>
                                    <h5 className="pull-left" style={{
                                        fontWeight: 'normal',
                                        fontFamily: 'sans-serif',
                                        color: '#9B9B9B'
                                    }}>Artist name goes here</h5>
                                </div>
                            </OwlCarousel>
                        </div>
                        <div style={{margin: '40px 0px 20px 0px'}} className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <span className="pull-left" style={{
                                fontWeight: 'normal',
                                color: 'black',
                                fontFamily: 'sans-serif',
                                fontSize: '35px'
                            }}>Popular Videos</span>
                        </div>
                        <div style={{ 'cursor': 'pointer' }} className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
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
                                    <img style={{borderRadius: '10px', width: '100%'}} alt="popular_videos"
                                         src={pvideo1}/>
                                    <h3 className="pull-left" style={{
                                        fontWeight: 'normal',
                                        fontFamily: 'sans-serif',
                                        color: 'black',
                                        marginBottom: '0px'
                                    }}>Music Video Name</h3>
                                    <h5 className="pull-left" style={{
                                        fontWeight: 'normal',
                                        fontFamily: 'sans-serif',
                                        color: '#9B9B9B'
                                    }}>Artist name goes here</h5>
                                </div>
                                <div className="item">
                                    <img style={{borderRadius: '10px', width: '100%'}} alt="popular_videos"
                                         src={pvideo2}/>
                                    <h3 className="pull-left" style={{
                                        fontWeight: 'normal',
                                        fontFamily: 'sans-serif',
                                        color: 'black',
                                        marginBottom: '0px'
                                    }}>Music Video Name</h3>
                                    <h5 className="pull-left" style={{
                                        fontWeight: 'normal',
                                        fontFamily: 'sans-serif',
                                        color: '#9B9B9B'
                                    }}>Artist name goes here</h5>
                                </div>
                                <div className="item">
                                    <img style={{borderRadius: '10px', width: '100%'}} alt="popular_videos"
                                         src={pvideo3}/>
                                    <h3 className="pull-left" style={{
                                        fontWeight: 'normal',
                                        fontFamily: 'sans-serif',
                                        color: 'black',
                                        marginBottom: '0px'
                                    }}>Music Video Name</h3>
                                    <h5 className="pull-left" style={{
                                        fontWeight: 'normal',
                                        fontFamily: 'sans-serif',
                                        color: '#9B9B9B'
                                    }}>Artist name goes here</h5>
                                </div>
                                <div className="item">
                                    <img style={{borderRadius: '10px', width: '100%'}} alt="popular_videos"
                                         src={pvideo4}/>
                                    <h3 className="pull-left" style={{
                                        fontWeight: 'normal',
                                        fontFamily: 'sans-serif',
                                        color: 'black',
                                        marginBottom: '0px'
                                    }}>Music Video Name</h3>
                                    <h5 className="pull-left" style={{
                                        fontWeight: 'normal',
                                        fontFamily: 'sans-serif',
                                        color: '#9B9B9B'
                                    }}>Artist name goes here</h5>
                                </div>
                            </OwlCarousel>
                        </div>
                        <div style={{margin: '40px 0px 20px 0px'}} className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <span className="pull-left" style={{
                                fontWeight: 'normal',
                                color: 'black',
                                fontFamily: 'sans-serif',
                                fontSize: '35px'
                            }}>Radio</span>
                        </div>
                        <div style={{ 'cursor': 'pointer' }} className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
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
                        <div style={{margin: '40px 0px 20px 0px'}} className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <span className="pull-left" style={{
                                fontWeight: 'normal',
                                color: 'black',
                                fontFamily: 'sans-serif',
                                fontSize: '35px'
                            }}>Trending Videos</span>
                        </div>
                        <div style={{margin: '0px 0px 50px 0px', 'cursor': 'pointer'}} className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <OwlCarousel
                                margin={30}
                                autoplay={false}
                                dots={true}
                                autoplayTimeout={2000}
                                autoplayHoverPause={true}
                                loop={true}
                                nav={false}
                                responsiveClass={true}
                                responsive={{
                                    0: {
                                        items: 1,
                                    },
                                    600: {
                                        items: 2,
                                    },
                                    1000: {
                                        items: 2,
                                    }
                                }}
                                className="owl-theme owl-carousel"
                            >
                                <div className="item">
                                    <img style={{borderRadius: '10px', width: '100%'}} alt="trending_videos"
                                         src={trendvid1}/>
                                </div>
                                <div className="item">
                                    <img style={{borderRadius: '10px', width: '100%'}} alt="trending_videos"
                                         src={trendvid2}/>
                                </div>
                                <div className="item">
                                    <img style={{borderRadius: '10px', width: '100%'}} alt="trending_videos"
                                         src={trendvid3}/>
                                </div>

                            </OwlCarousel>
                        </div>
                    </div>
                    <div className="row" style={{padding: '0px 12px 0px 16px', margin: '0px'}}>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{backgroundColor: 'white'}}>
                            <div className="row" style={{padding: '0px 12px 0px 16px', margin: '0px'}}>
                                <div style={{padding: '8px 0px 0px 0px'}}
                                     className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                    <img className="row img-responsive" alt="logo_footer"
                                         style={{width: '150px', paddingTop: '25px', paddingLeft: '18px'}}
                                         src={logo_footer}/>
                                    <div className="row" style={{padding: '14px 0px 0px 0px', margin: '0px'}}><Instagram
                                        style={{width: '15px', color: 'black', margin: '0px 5px'}}
                                        className="pull-left"/><span className="pull-left"
                                                                     style={{margin: '1px 0px 0px 10px'}}>Instagram</span>
                                    </div>
                                    <br/>
                                    <div className="row" style={{padding: '0px', margin: '0px'}}><Facebook
                                        className="pull-left"
                                        style={{width: '15px', color: 'black', marginLeft: '5px'}}/><span
                                        className="pull-left" style={{margin: '1px 0px 0px 15px'}}>Facebook</span></div>
                                    <br/>
                                    <div className="row" style={{padding: '0px', margin: '0px'}}><Twitter
                                        className="pull-left"
                                        style={{width: '15px', color: 'black', marginLeft: '5px'}}/><span
                                        className="pull-left" style={{margin: '1px 0px 0px 15px'}}>Twitter</span></div>
                                </div>
                                <div style={{padding: '18px 0px 10px 0px'}}
                                     className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                    <h3 className="row" style={{color: '#676767', fontWeight: 'normal'}}>Who we are
                                        ?</h3>
                                    <h5 className="row" style={{
                                        color: '#7F7F7F',
                                        fontWeight: 'normal',
                                        padding: '10px 0px 0px 0px',
                                        margin: '0px'
                                    }}>About us</h5><br/>
                                    <h5 className="row" style={{
                                        color: '#7F7F7F',
                                        fontWeight: 'normal',
                                        padding: '10px 0px 0px 0px',
                                        margin: '0px'
                                    }}>Contact us</h5><br/>
                                    <h5 className="row" style={{
                                        color: '#7F7F7F',
                                        fontWeight: 'normal',
                                        padding: '10px 0px 0px 0px',
                                        margin: '0px'
                                    }}>News</h5>
                                </div>
                                <div style={{padding: '18px 0px 10px 0px'}}
                                     className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                    <h3 className="row" style={{color: '#676767', fontWeight: 'normal'}}>Explore</h3>
                                    <h5 className="row" style={{
                                        color: '#7F7F7F',
                                        fontWeight: 'normal',
                                        padding: '10px 0px 0px 0px',
                                        margin: '0px'
                                    }}>Home</h5><br/>
                                    <h5 className="row" style={{
                                        color: '#7F7F7F',
                                        fontWeight: 'normal',
                                        padding: '10px 0px 0px 0px',
                                        margin: '0px'
                                    }}>Podcast</h5><br/>
                                    <h5 className="row" style={{
                                        color: '#7F7F7F',
                                        fontWeight: 'normal',
                                        padding: '10px 0px 0px 0px',
                                        margin: '0px'
                                    }}>Video</h5>
                                </div>
                                <div style={{padding: '18px 0px 10px 0px'}}
                                     className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                    <h3 className="row" style={{color: '#676767', fontWeight: 'normal'}}>Legal</h3>
                                    <h5 className="row" style={{
                                        color: '#7F7F7F',
                                        fontWeight: 'normal',
                                        padding: '10px 0px 0px 0px',
                                        margin: '0px'
                                    }}>Help & Support</h5><br/>
                                    <h5 className="row" style={{
                                        color: '#7F7F7F',
                                        fontWeight: 'normal',
                                        padding: '10px 0px 0px 0px',
                                        margin: '0px'
                                    }}>Terms of services</h5><br/>
                                    <h5 className="row" style={{
                                        color: '#7F7F7F',
                                        fontWeight: 'normal',
                                        padding: '10px 0px 0px 0px',
                                        margin: '0px'
                                    }}>FAQ</h5>
                                </div>
                                <div style={{padding: '18px 0px 10px 0px'}}
                                     className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                    <h3 className="row" style={{color: '#676767', fontWeight: 'normal'}}>Products</h3>
                                    <h5 className="row" style={{
                                        color: '#7F7F7F',
                                        fontWeight: 'normal',
                                        padding: '10px 0px 0px 0px',
                                        margin: '0px'
                                    }}>Android</h5><br/>
                                    <h5 className="row" style={{
                                        color: '#7F7F7F',
                                        fontWeight: 'normal',
                                        padding: '10px 0px 0px 0px',
                                        margin: '0px'
                                    }}>iOS</h5><br/>
                                    <h5 className="row" style={{
                                        color: '#7F7F7F',
                                        fontWeight: 'normal',
                                        padding: '10px 0px 0px 0px',
                                        margin: '0px'
                                    }}>Web Player</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{backgroundColor: 'white'}}>
                            <br/><br/><br/><br/>
                            <h5 style={{
                                fontWeight: 'normal',
                                color: '#9b9b9b',
                                margin: '20px 20px 20px 0px'
                            }}>&copy; 2020 Shadhin. All rights
                                reserved</h5>
                            <br/><br/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default App;
