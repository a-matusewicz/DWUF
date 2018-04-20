$(document).ready(function(){
                  $("label").inFieldLabels(),
                  $("#portfolio-slider").carouFredSel({
                                                      items:{visible:"variable"},
                                                      responsive:!0,
                                                      scroll:{
                                                        items:1,
                                                        mousewheel:!0,
                                                        wipe:!0,
                                                        duration:500,
                                                        pauseOnHover:true
                                                                },
                                                      auto:!1,
                                                      prev:{
                                                        button:"#portfolio-prev",
                                                        key:"left"
                                                            },
                                                      next:{
                                                        button:"#portfolio-next",
                                                        key:"right"
                                                            },
                                                      pagination:"#portfolio-pagination"
                                                      
                                                      }),
                  $("#nav a, #logo a, span.arrow-down a, .totop a").smoothScroll({afterScroll:function(){$("#nav a").removeClass("active"),$(this).addClass("active")}}),$("#logo").waypoint(function(e,t){$("#nav a").removeClass("active"),t==="down"?$("#nav-start a").addClass("active"):$("#nav a").removeClass("active")},{offset:"5px"}),$("#schedule").waypoint(function(e,t){$("#nav a").removeClass("active"),t==="down"?$("#nav-schedule a").addClass("active"):$("#nav-start a").removeClass("active")},{offset:"0px"}),$("#roster").waypoint(function(e,t){$("#nav a").removeClass("active"),t==="down"?$("#nav-roster a").addClass("active"):$("#nav-schedule a").addClass("active")},{offset:"5px"}),$("#media").waypoint(function(e,t){$("#nav a").removeClass("active"),t==="down"?$("#nav-media a").addClass("active"):$("#nav-roster a").addClass("active")},{offset:"5px"}),$("#involve").waypoint(function(e,t){$("#nav a").removeClass("active"),t==="down"?$("#nav-involve a").addClass("active"):$("#nav-media a").addClass("active")},{offset:"5px"}),$("#contact").waypoint(function(e,t){$("#nav a").removeClass("active"),t==="down"?$("#nav-contact a").addClass("active"):$("#nav-involve a").addClass("active")},{offset:"5px"})});
