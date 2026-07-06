import React from 'react'
import "../styles/styles_home-success-stories.css"

const SuccessStories = () => {
    const bgVideo = `
     [data-wf-bgvideo-fallback-img] {
            display: none;
            }

            @media (prefers-reduced-motion: reduce) {
                [data - wf - bgvideo - fallback - img] {
                position: absolute;
            z-index: -100;
            display: inline-block;
            height: 100%;
            width: 100%;
            object-fit: cover;
            }
        }
    `

    return (
        <>
            <section className="section">
                <div className="padding-section-large padding-section_home-success-stories">
                    <div className="container-medium">
                        <div>
                            <div className="section-heading-horizontal tablet-align-center">
                                <div className="tablet-text-align-center">
                                    <div className="text-color-white">
                                        <h2 className="heading-style-h2">
                                            <span className="text-color-gradient">Success</span> stories
                                        </h2>
                                    </div>
                                </div>
                                <div className="w-dyn-list">
                                    <div r-tabs-interaction="click" r-cms-tabs="list" role="list"
                                        className="stories-tabs_menu cms-custom w-dyn-items">
                                        <div role="listitem" className="stories-tabs_tab-link w-dyn-item">
                                            <img loading="lazy" alt="QuillBot"
                                                src="https://cdn.prod.website-files.com/659ba24ba3e796a3652951d0/659e11cfdbd511c6e0fab57a_success-stories_quillbot.png"
                                                className="image-full _w-auto" />
                                            <div className="stories-tabs_tab-link-inner-bg"></div>
                                        </div>
                                        <div role="listitem" className="stories-tabs_tab-link w-dyn-item">
                                            <img loading="lazy" alt="Table22"
                                                src="https://cdn.prod.website-files.com/659ba24ba3e796a3652951d0/659e11f72c2a699e476f90ce_success-stories_table22.png"
                                                className="image-full _w-auto" />
                                            <div className="stories-tabs_tab-link-inner-bg"></div>
                                        </div>
                                        <div role="listitem" className="stories-tabs_tab-link w-dyn-item">
                                            <img loading="lazy" alt="Quicklines AI"
                                                src="https://cdn.prod.website-files.com/659ba24ba3e796a3652951d0/659f67c63bbc8f8464b56d0e_610963855ed79411c2838319_Quicklines%20AI%20(1)%201%20(2).png"
                                                sizes="(max-width: 991px) 100vw, 2399.953369140625px" srcSet="
                            https://cdn.prod.website-files.com/659ba24ba3e796a3652951d0/659f67c63bbc8f8464b56d0e_610963855ed79411c2838319_Quicklines%20AI%20(1)%201%20(2)-p-500.png 500w,
                            https://cdn.prod.website-files.com/659ba24ba3e796a3652951d0/659f67c63bbc8f8464b56d0e_610963855ed79411c2838319_Quicklines%20AI%20(1)%201%20(2).png       800w
                          " className="image-full _w-auto" />
                                            <div className="stories-tabs_tab-link-inner-bg"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="padding-top padding-xlarge">
                                <div className="w-dyn-list">
                                    <div r-cms-tabs="content" role="list" className="stories-tabs_content w-dyn-items">
                                        <div role="listitem" className="stories-tabs_tab-pane w-dyn-item">
                                            <div className="home-story">
                                                <div className="home-story_left-side">
                                                    <div>
                                                        <h6 className="heading-style-h6 no-letter-spacing">
                                                            Quillbot, a B2C PaaS company was featured as the
                                                            #2 Favorite Chrome extension for 2023 with +3M
                                                            Active users, and is using video to more
                                                            effectively convert users.
                                                        </h6>
                                                    </div>
                                                </div>
                                                <div className="home-story_right-side">
                                                    <div className="home-story_video-wrap">
                                                        <div className="home-story_video w-background-video w-background-video-atom"
                                                            data-cms-thumbnail="" data-autoplay="false" data-loop="true" data-wf-ignore="true"
                                                            data-cms-slug="quillbot" data-video-urls=""
                                                            data-cms-src="https://cdn.vidzflow.com/v/kaoQJgNMnW_720p_1704944392.mp4">
                                                            <video id="931543ad-98a0-e938-7f42-f65d98f30d99-video" loop="" muted="" playsInline=""
                                                                data-wf-ignore="true" data-object-fit="cover"></video>
                                                            <noscript>
                                                                <style dangerouslySetInnerHTML={{ __html: bgVideo }} />
                                                                <img data-wf-bgvideo-fallback-img="true" alt="" />
                                                            </noscript>
                                                            <div aria-live="polite">
                                                                <button type="button" data-w-bg-video-control="true"
                                                                    aria-controls="931543ad-98a0-e938-7f42-f65d98f30d99-video"
                                                                    className="w-backgroundvideo-backgroundvideoplaypausebutton home-story_video-button w-background-video--control">
                                                                    <span className="video-button-icon pause-button"><img loading="lazy"
                                                                        src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659e853a03acf6ed2d436e9c_video-pause-button.webp"
                                                                        alt="" className="image-full" /></span><span hidden="" className="video-button-icon"><img
                                                                            loading="lazy"
                                                                            src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659d20dfbca2353d04fbfa74_video-play-button.webp"
                                                                            alt="" className="image-full" /></span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div role="listitem" className="stories-tabs_tab-pane w-dyn-item">
                                            <div className="home-story">
                                                <div className="home-story_left-side">
                                                    <div>
                                                        <h6 className="heading-style-h6 no-letter-spacing">
                                                            Table22, a B2B PaaS company is using a segmented
                                                            video strategy to increase engagement on their
                                                            cold outreach campaigns
                                                        </h6>
                                                    </div>
                                                </div>
                                                <div className="home-story_right-side">
                                                    <div className="home-story_video-wrap">
                                                        <div className="home-story_video w-background-video w-background-video-atom"
                                                            data-cms-thumbnail="" data-autoplay="false" data-loop="true" data-wf-ignore="true"
                                                            data-cms-slug="table22" data-video-urls=""
                                                            data-cms-src="https://cdn.vidzflow.com/v/PUDZSuIRx8_1080p_1705439764.mp4">
                                                            <video id="931543ad-98a0-e938-7f42-f65d98f30d99-video" loop="" muted="" playsInline=""
                                                                data-wf-ignore="true" data-object-fit="cover"></video>
                                                            <noscript>
                                                                <style dangerouslySetInnerHTML={{ __html: bgVideo }} />
                                                                <img data-wf-bgvideo-fallback-img="true" alt="" />
                                                            </noscript>
                                                            <div aria-live="polite">
                                                                <button type="button" data-w-bg-video-control="true"
                                                                    aria-controls="931543ad-98a0-e938-7f42-f65d98f30d99-video"
                                                                    className="w-backgroundvideo-backgroundvideoplaypausebutton home-story_video-button w-background-video--control">
                                                                    <span className="video-button-icon pause-button"><img loading="lazy"
                                                                        src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659e853a03acf6ed2d436e9c_video-pause-button.webp"
                                                                        alt="" className="image-full" /></span><span hidden="" className="video-button-icon"><img
                                                                            loading="lazy"
                                                                            src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659d20dfbca2353d04fbfa74_video-play-button.webp"
                                                                            alt="" className="image-full" /></span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div role="listitem" className="stories-tabs_tab-pane w-dyn-item">
                                            <div className="home-story">
                                                <div className="home-story_left-side">
                                                    <div>
                                                        <h6 className="heading-style-h6 no-letter-spacing">
                                                            Quicklines AI, a SaaS platform for cold email
                                                            campaigns generated over $100k in one-time
                                                            purchases for their tool using video in their
                                                            organic launch strategy
                                                        </h6>
                                                    </div>
                                                </div>
                                                <div className="home-story_right-side">
                                                    <div className="home-story_video-wrap">
                                                        <div className="home-story_video w-background-video w-background-video-atom"
                                                            data-cms-thumbnail="" data-autoplay="false" data-loop="true" data-wf-ignore="true"
                                                            data-cms-slug="smile-io" data-video-urls=""
                                                            data-cms-src="https://cdn.vidzflow.com/v/UWarpjYMy6_1080p_1704944600.mp4">
                                                            <video id="931543ad-98a0-e938-7f42-f65d98f30d99-video" loop="" muted="" playsInline=""
                                                                data-wf-ignore="true" data-object-fit="cover"></video>
                                                            <noscript>
                                                                <style dangerouslySetInnerHTML={{ __html: bgVideo }} />
                                                                <img data-wf-bgvideo-fallback-img="true" alt="" />
                                                            </noscript>
                                                            <div aria-live="polite">
                                                                <button type="button" data-w-bg-video-control="true"
                                                                    aria-controls="931543ad-98a0-e938-7f42-f65d98f30d99-video"
                                                                    className="w-backgroundvideo-backgroundvideoplaypausebutton home-story_video-button w-background-video--control">
                                                                    <span className="video-button-icon pause-button"><img loading="lazy"
                                                                        src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659e853a03acf6ed2d436e9c_video-pause-button.webp"
                                                                        alt="" className="image-full" /></span><span hidden="" className="video-button-icon"><img
                                                                            loading="lazy"
                                                                            src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659d20dfbca2353d04fbfa74_video-play-button.webp"
                                                                            alt="" className="image-full" /></span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SuccessStories
