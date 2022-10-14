import React from 'react';
import {loadFull} from "tsparticles";
import Particles from "react-tsparticles";

export default class MyParticles extends React.Component {
    constructor() {
        super();

        this.particlesInit = this.particlesInit.bind(this);
    }
    
    async particlesInit(engine) {
        await loadFull(engine);
    }

    render() {
        return (
            <React.StrictMode>
                <Particles
                    id="tsparticles"
                    init={this.particlesInit}
                    options={{
                        fpsLimit: 120,
                        interactivity: {
                            modes: {
                                push: {
                                    quantity: 4,
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#ffffff",
                            },
                            collisions: {
                                enable: true,
                            },
                            move: {
                                directions: "none",
                                enable: true,
                                outModes: {
                                    default: "bounce",
                                },
                                random: true,
                                speed: {min: 0.5, max: 2},
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 600,
                                },
                                value: 50,
                            },
                            opacity: {
                                value: { min: 0.05, max: 0.2 },
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                value: { min: 1, max: 4 },
                            },
                        },
                        detectRetina: true,
                    }}
                />
                <Particles
                    id="tsparticles1"
                    init={this.particlesInit}
                    options={{
                        fpsLimit: 120,
                        interactivity: {
                            modes: {
                                push: {
                                    quantity: 4,
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#f51911",
                            },
                            collisions: {
                                enable: true,
                            },
                            move: {
                                directions: "none",
                                enable: true,
                                outModes: {
                                    default: "bounce",
                                },
                                random: true,
                                speed: {min: 0.5, max: 2},
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 600,
                                },
                                value: 50,
                            },
                            opacity: {
                                value: { min: 0.05, max: 0.2 },
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                value: { min: 1, max: 4 },
                            },
                        },
                        detectRetina: true,
                    }}
                />
            </React.StrictMode>
            
        );
    }
}