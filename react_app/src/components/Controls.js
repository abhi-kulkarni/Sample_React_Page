import React, {useState, useEffect, useRef, useContext} from 'react'

function Controls() {

    // Global State
    // const {
    //   currentSong,
    //   songs,
    //   nextSong,
    //   prevSong,
    //   repeat,
    //   random,
    //   playing,
    //   toggleRandom,
    //   toggleRepeat,
    //   togglePlaying,
    //
    // } = useContext(playerContext);

    const audio = useRef('audio_tag');

    const [statevolum, setStateVolum] = useState(0.3);
    const [random, setRandom] = useState(true);
    const [repeat, setRepeat] = useState(10);
    const [playing, setPlaying] = useState(true);
    const [dur, setDur] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const fmtMSS = (s) => {
        return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + ~~(s)
    };
    const [currSong, setCurrSong] = useState("https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/wwy.mp3");
    const [prevSong, setPrevSong] = useState("https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/wwy.mp3");
    const toggleAudio = () => audio.current.paused ? audio.current.play() : audio.current.pause();

    const handleVolume = (q) => {
        setStateVolum(q);
        audio.current.volume = q;
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

    const handleProgress = (e) => {
        let compute = (e.target.value * dur) / 100;
        setCurrentTime(compute);
        audio.current.currentTime = compute;

    };

    const handleEnd = () => {
        alert('END')
    };

    useEffect(() => {
        audio.current.volume = statevolum;
        if (playing) {
            toggleAudio()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currSong]);

    return (
        <div className="controls" style={{margin: '20px 0px 0px 0px', padding: '0px'}}>
            <div className="row" style={{margin: '0px', padding: '0px'}}>
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

            <div className="progress_bar_container row">
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
    )
}

export default Controls
