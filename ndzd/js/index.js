(function () {
    let dm = document.documentElement || document.body;
    dm.scrollTop = dm.scrollHeight;
    dm.scrollTop = dm.scrollHeight;
    document.querySelector('body').style.opacity = 1;
    dm.style.overflow = "hidden";
    let timer = null;
    let timer2 = null;
    function rotate() {
        let count = 97;
        clearInterval(timer);
        timer = setInterval(() => {
            document.querySelector('.mtl').src = `./img/z18-${String.fromCharCode(count)}.png`;
            count++;
            if (count > 99) {
                count = 97;
            }
        }, 90);
    }
})();

//道路
{
    let timerRoad = null;
    let roadBottom = [['-3.189rem', '-2.92rem', '-3.37rem', '-0.37rem', '0.332rem', '-0.21rem', '0.54rem'], [], [], []]
    let jt = anime({
        targets: '.imgthree',
        opacity: [{ value: 1, duration: 500 }, { value: 0, duration: 500 }, { value: 0, duration: 500 }],
        easing: 'linear',
        loop: true,
    });
    let jt2 = anime({
        targets: '.imgtwo',
        opacity: [{ value: 0, duration: 500 }, { value: 1, duration: 500 }, { value: 0, duration: 500 }],
        easing: 'linear',
        loop: true,
    });
    let jt3 = anime({
        targets: '.imgone',
        opacity: [{ value: 0, duration: 500 }, { value: 0, duration: 500 }, { value: 1, duration: 500 }],
        easing: 'linear',
        loop: true,
    })
    document.querySelector('.upimg').onclick = function () {
        document.querySelector('.star').style.display = 'none';
        jt.pause(); jt2.pause(); jt3.pause();
        anime({
            targets: '.mtl',
            bottom: '0.6rem',
            easing: 'linear',
            duration: 1000,
        }),
            anime({
                targets: '.gl',
                bottom: '2rem',
                easing: 'linear',
                duration: 1000,
            })
        anime({
            targets: '.dx',
            bottom: '1.25rem',
            easing: 'linear',
            duration: 1000,
            complete: () => {
                road(2, 8, ['-3.189rem', '-2.92rem', '-3.37rem', '-0.37rem', '0.332rem', '-0.21rem', '0.54rem']);
            }
        })

    }

    for (let i of document.querySelectorAll('.yy')) {
        i.setAttribute('ck', 1);
    }

    function road(star, end, arr, delayTime = 0) {
        clearInterval(timerRoad);
        let time = 1000;
        let objCount = star;
        let i = 0;
        timerRoad = setInterval(() => {
            let ani = anime({
                targets: `.z${objCount = objCount < 10 ? '0' + objCount : objCount}`,
                bottom: arr[i],
                duration: time,
                delay: delayTime,
                complete: () => {
                    ani.pause();
                }
            });
            time += 200;
            if (i == end) {
                clearInterval(timerRoad);
            };
            objCount++;
            i++;
        }, 200)
    }
    function road2(star, end, arr) {
        clearInterval(timerRoad);
        let time = 1000;
        let objCount = star;
        let i = 0;
        for (i; i <= end; i++) {
            let ani = anime({
                targets: `.z${objCount = objCount < 10 ? '0' + objCount : objCount}`,
                bottom: arr,
                duration: 4000,
                complete: () => {
                    ani.pause();
                }
            });
            objCount++;
        }
    }

    function move(obj, bom, time) {
        anime({
            targets: obj,
            bottom: bom,
            easing: 'linear',
            duration: time,
        });
    }
}

//运动
(function () {
    let dm = document.documentElement || document.body;
    var animal = document.querySelector('.animal');
    var clickTwo = null;
    var clickThree = null;
    var clickFour = null;
    var clickOne = anime({
        targets: ['.animal'],
        left: '2.1rem',
        bottom: '1rem',
        duration: 1500,
        easing: 'linear',
        autoplay: false,
        begin: () => {
            var updates = 1;
            animal.timer = setInterval(() => {
                if (updates == 5) {
                    updates = 0;
                }
                updates++;
                animal.src = `./img/animal/gz${updates}.png`;
            }, 150);
        },
        complete: (ani) => {
            animal.src = `./img/animal/gz11.png`;
            clearInterval(animal.timer);
            //animal.style.backgroundImage = `url(./img/animal/gz11.png)`;
            var ma = anime({
                targets: ['.animal'],
                duration: 1500,
                easing: 'linear',
                left: '2.9rem',
                bottom: '1.5rem',
                autoplay: 'false',
                begin: () => {
                    clickOne.pause();
                    var updates = 10;
                    animal.timer = setInterval(() => {
                        if (updates == 15) {
                            updates = 10;
                        }
                        updates++;
                        console.log(updates);
                        animal.src = `./img/animal/gz${updates}.png`;
                    }, 150);
                },
                complete: () => {
                    clearInterval(animal.timer);
                    animal.src = `./img/animal/gz1.png`;
                    var mae = anime({
                        targets: ['.animal'],
                        duration: 2700,
                        easing: 'linear',
                        left: '1.08rem',
                        bottom: '2.65rem',
                        begin: () => {
                            var updates = 1;
                            animal.timer = setInterval(() => {
                                if (updates == 5) {
                                    updates = 0;
                                }
                                updates++;
                                animal.src = `./img/animal/gz${updates}.png`;
                            }, 150);
                        },
                        complete: () => {
                            clearInterval(animal.timer);
                            animal.src = `./img/animal/gz11.png`;
                            var a = anime({
                                targets: ['.animal'],
                                duration: 3000,
                                easing: 'linear',
                                left: [{ value: '1.8rem' }, { value: '2rem', duration: 500 }],
                                bottom: [{ value: '3.7rem' }, { value: '3.85rem', duration: 500 }],
                                begin: () => {
                                    mae.pause();
                                    var updates = 11;
                                    animal.timer = setInterval(() => {
                                        if (updates == 15) {
                                            updates = 11;
                                        }
                                        updates++;
                                        animal.src = `./img/animal/gz${updates}.png`;
                                    }, 150);
                                },
                                complete: () => {
                                    //第一段结束
                                    clearInterval(animal.timer);
                                    document.querySelector('.z08 .yh').style.display = 'none';
                                    animal.src = `./img/animal/gz1.png`;
                                    move('.phone', '1.7rem', 1000);
                                    road(9, 13, ['1.288rem', '1.71rem', '2.13rem', '2.55rem', '2.54rem'], 1000);
                                    clickTwo = anime({
                                        targets: '.animal',
                                        duration: 1000,
                                        easing: 'linear',
                                        left: '1.53rem',
                                        bottom: '4.15rem',
                                        autoplay: false,
                                        begin: () => {
                                            a.pause();
                                            var updates = 1;
                                            animal.timer = setInterval(() => {
                                                if (updates == 5) {
                                                    updates = 0;
                                                }
                                                updates++;
                                                animal.src = `./img/animal/gz${updates}.png`;
                                            }, 150);
                                        },
                                        complete: () => {
                                            clearInterval(animal.timer);
                                            animal.src = `./img/animal/gz11.png`;
                                            var ct = anime({
                                                targets: '.animal',
                                                duration: 4000,
                                                easing: 'linear',
                                                bottom: '5.85rem',
                                                left: '4.4rem',
                                                begin: () => {
                                                    a.pause();
                                                    var updates = 11;
                                                    animal.timer = setInterval(() => {
                                                        if (updates == 15) {
                                                            updates = 11;
                                                        }
                                                        updates++;
                                                        animal.src = `./img/animal/gz${updates}.png`;
                                                    }, 150);
                                                },
                                                complete: () => {
                                                    clearInterval(animal.timer);
                                                    document.querySelector('.z13 .yh').style.display = 'none';
                                                    animal.src = `./img/animal/gz21.png`;
                                                    //第二段结束
                                                    move('.wifi', '3.4rem', 1000);
                                                    road(14, 18, ['4.54rem', '-0.23rem', '0.23rem', '-0.04rem', '-0.05rem'], 1000)
                                                    clickThree = anime({
                                                        targets: '.animal',
                                                        duration: 4000,
                                                        easing: 'linear',
                                                        bottom: [{ value: '5.75rem', duration: 200 }, { value: '4.6rem' }],
                                                        left: [{ value: "4.6rem", duration: 200 }, { value: '5.28rem' }],
                                                        autoplay: false,
                                                        begin: () => {
                                                            ct.pause();
                                                            var updates = 21;
                                                            animal.timer = setInterval(() => {
                                                                if (updates == 25) {
                                                                    updates = 21;
                                                                }
                                                                updates++;
                                                                animal.src = `./img/animal/gz${updates}.png`;
                                                            }, 150);
                                                        },
                                                        complete: () => {
                                                            clearInterval(animal.timer);
                                                            animal.src = `./img/animal/gz31.png`;
                                                            var abc = anime({
                                                                targets: '.animal',
                                                                duration: 2000,
                                                                easing: 'linear',
                                                                left: '4.5rem',
                                                                bottom: '4.07rem',
                                                                begin: () => {
                                                                    clickThree.pause();
                                                                    var updates = 31;
                                                                    animal.timer = setInterval(() => {
                                                                        if (updates == 35) {
                                                                            updates = 31;
                                                                        }
                                                                        updates++;
                                                                        animal.src = `./img/animal/gz${updates}.png`;
                                                                    }, 150);
                                                                },
                                                                complete: () => {
                                                                    clearInterval(animal.timer);
                                                                    animal.src = `./img/animal/gz21.png`;
                                                                    var abcd = anime({
                                                                        targets: '.animal',
                                                                        duration: 2000,
                                                                        easing: 'linear',
                                                                        left: '5.87rem',
                                                                        bottom: '3.26rem',
                                                                        begin: () => {
                                                                            clickThree.pause();
                                                                            var updates = 21;
                                                                            animal.timer = setInterval(() => {
                                                                                if (updates == 25) {
                                                                                    updates = 21;
                                                                                }
                                                                                updates++;
                                                                                animal.src= `./img/animal/gz${updates}.png`;
                                                                            }, 150);
                                                                        },
                                                                        complete: () => {
                                                                            clearInterval(animal.timer);
                                                                            document.querySelector('.z18 .yh').style.display = 'none';
                                                                            animal.src = `./img/animal/gz31.png`;
                                                                            //第三段结束
                                                                            move('.gold', '0.05rem', 1000);
                                                                            road(19, 22, ['2.64rem', '-0.44rem', '0.01rem', '-1.95rem']);
                                                                            clickFour = anime({
                                                                                targets: '.animal',
                                                                                duration: 2000,
                                                                                easing: 'linear',
                                                                                left: [{ value: '5.67rem' }, { value: '5.16rem' }, { value: '4.35rem' }],
                                                                                bottom: [{ value: '3.15rem' }, { value: '2.6rem' }, { value: '2.16rem' }],
                                                                                autoplay: false,
                                                                                begin: () => {
                                                                                    abcd.pause();
                                                                                    var updates = 31;
                                                                                    animal.timer = setInterval(() => {
                                                                                        if (updates == 35) {
                                                                                            updates = 31;
                                                                                        }
                                                                                        updates++;
                                                                                        animal.src = `./img/animal/gz${updates}.png`;
                                                                                    }, 150);
                                                                                },
                                                                                complete: () => {
                                                                                    clearInterval(animal.timer);
                                                                                    animal.src = `./img/animal/gz1.png`;
                                                                                    var add = anime({
                                                                                        targets: '.animal',
                                                                                        duration: 2000,
                                                                                        easing: 'linear',
                                                                                        left: [{ value: '3.9rem' }, { value: '3.6rem' }],
                                                                                        bottom: [{ value: '2.7rem' }, { value: '2.9rem' }],
                                                                                        begin: () => {
                                                                                            clickFour.pause();
                                                                                            var updates = 1;
                                                                                            animal.timer = setInterval(() => {
                                                                                                if (updates == 5) {
                                                                                                    updates = 1;
                                                                                                }
                                                                                                updates++;
                                                                                                animal.src = `./img/animal/gz${updates}.png`;
                                                                                            }, 150);
                                                                                        },
                                                                                        complete: () => {
                                                                                            clearInterval(animal.timer);
                                                                                            document.querySelector('.z22 .yh').style.display = 'none';
                                                                                            animal.src = './img/animal/gz21.png';
                                                                                            road2(1, 20, '-6rem');
                                                                                            document.querySelector('.textTitle').innerHTML = '';
                                                                                            document.querySelector('.textCenter').innerHTML = '';
                                                                                            document.querySelector('.title').style.background = 'none';
                                                                                            anime({
                                                                                                targets: '.container',
                                                                                                duration: 4000,
                                                                                                easing: 'linear',
                                                                                                backgroundPositionY: 0,
                                                                                                complete: () => {
                                                                                                    document.querySelector('.hx').style.display = 'block';
                                                                                                    document.querySelector('.hx').style.animation = 'center 2s linear forwards,updown2 2s linear 2s infinite';
                                                                                                    document.querySelector('.sx').style.animation = 'left 2s linear  forwards,updown 2s linear 2s infinite';
                                                                                                    document.querySelector('.jx').style.animation = 'right 2s linear forwards,updown 2s linear 2s infinite';
                                                                                                    document.querySelector('.textTitle').innerHTML = '2020年你的年度账单<br>综合评分为<span class="contText">87.5</span>';
                                                                                                    document.querySelector('.textTitle').style.textAlign = 'left';
                                                                                                    document.querySelector('.textCenter').style.textAlign = 'left';
                                                                                                    document.querySelector('.textCenter').style.fontSize = '0.25rem'
                                                                                                    document.querySelector('.textCenter').innerHTML = '战胜了你的<span>三</span>位好友,赢得88元流量卷';
                                                                                                }
                                                                                            })
                                                                                            anime({
                                                                                                targets: '.z22',
                                                                                                easing: 'linear',
                                                                                                bottom: [{ value: "-2.35rem", duration: 100, }],//,{value:0,duration:1000,},
                                                                                                complete: () => {
                                                                                                    anime({
                                                                                                        targets: '.z22',
                                                                                                        easing: 'linear',
                                                                                                        duration: 1000,
                                                                                                        bottom: '0'
                                                                                                    })
                                                                                                }
                                                                                            })
                                                                                            anime({
                                                                                                targets: '.animal',
                                                                                                easing: 'linear',
                                                                                                bottom: [{ value: "2.5rem", duration: 100 }],//,{value:'4.8rem',duration:1000,}
                                                                                                complete: () => {
                                                                                                    move('.mtl', '-6rem');
                                                                                                    move('.phone', '-6rem');
                                                                                                    move('.wifi', '-6rem');
                                                                                                    move('.gold', '-6rem');
                                                                                                    move('.gl', '-6rem');
                                                                                                    move('.dx', '-7rem');
                                                                                                    move('.mount', '-6rem');
                                                                                                    move('.one', '-6rem');
                                                                                                    move('.two', '-6rem');
                                                                                                    move('.three', '-6rem');
                                                                                                    anime({
                                                                                                        targets: '.animal',
                                                                                                        easing: 'linear',
                                                                                                        duration: 1000,
                                                                                                        bottom: '4.8rem',

                                                                                                    })
                                                                                                }
                                                                                            })
                                                                                        }
                                                                                    });
                                                                                }
                                                                            });
                                                                        }
                                                                    });
                                                                }
                                                            });
                                                        }
                                                    });
                                                }
                                            })
                                        }
                                    });
                                }

                            })
                        }
                    })
                }
            });
        }
    });


    document.querySelector('.z08 .yy').onclick = function () {
        if (this.getAttribute('ck') == 1) {
            clickOne.play();
            this.setAttribute('ck', 0);
        }
    }
    document.querySelector('.z13 .yy').onclick = function () {
        if (this.getAttribute('ck') == 1) {
            clickTwo.play();
            this.setAttribute('ck', 0);
        }
    }
    document.querySelector('.z18 .yy').onclick = function () {
        if (this.getAttribute('ck') == 1) {
            clickThree.play();
            this.setAttribute('ck', 0);
        }
    }
    document.querySelector('.z22 .yy').onclick = function () {
        if (this.getAttribute('ck') == 1) {
            clickFour.play();
            this.setAttribute('ck', 0);
        }
    }
})();
