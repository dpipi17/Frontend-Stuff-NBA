import slide from './Custom Elements/slide.js'

export default class HomePage {
    static render(params) {
        return `
            <div id="slideshow" data-component="slideshow">
                <div role="list">
                    <my-slide imageSrc="https://cdn.nba.com/manage/2020/11/klay-thompson.jpg" 
                              title="Klay's injury"
                              text="Golden State Warriors guard Klay Thompson suffered a torn right Achilles tendon, 
                                    an MRI confirmed today in Los Angeles. Thompson suffered the injury yesterday in a 
                                    workout in Southern California. He is expected to miss the 2020-21 season.

                                    It's the latest setback for the Warriors star, who missed the 2019-20 season with a torn ACL 
                                    in his left knee. That partly contributed to the Warriors' 15-50 record in 2019-20, 
                                    resulting in Golden State selecting James Wiseman No. 2 overall in the 2020 NBA Draft."></my-slide>

                                    
                    <my-slide imageSrc="https://cdn.nba.com/manage/2020/11/james-wiseman-draft.jpg"
                              title="2020 NBA draft"
                              text="The 2020 NBA draft was held on November 18, 2020. The draft was originally scheduled to be held at Barclays Center in Brooklyn 
                              on June 25, but was instead conducted at ESPN's facilities in Bristol, Connecticut, with the event held via videoconferencing. 
                              National Basketball Association (NBA) teams took turns selecting amateur United States college basketball players and other eligible players, 
                              including international players. It was televised nationally on ESPN. The draft lottery was originally scheduled to take place on May 19, 2020,
                              but due to the ongoing COVID-19 pandemic, it was instead held on August 20, 2020.[1] This draft was the first since 1975 to be held not in June 
                              and was also the second to be done later than that month after the inaugural 1947 draft, which was conducted in July by the NBA's predecessor, 
                              the Basketball Association of America (BAA)."></my-slide>
                    
                    
                    <my-slide imageSrc="https://cdn.nba.com/manage/2020/11/anthony-edwards-draft-hat.jpg"
                              title="No. 1 pick in NBA draft"
                              text="Five months later than originally scheduled, the Minnesota Timberwolves selected Anthony Edwards with the first pick of the 2020 NBA draft Wednesday.

                              The Golden State Warriors took center James Wiseman with the No. 2 pick, and guard LaMelo Ball followed as the third pick to the Charlotte Hornets.
                              
                              Edwards, a 6-foot-5, 220-pound guard from Atlanta who spent his lone college season at Georgia, joins a young Timberwolves 
                              core led by star center Karl-Anthony Towns and point guard D'Angelo Russell. 
                              Edwards led all Division I freshmen with 19.1 points per game last season and was the SEC Freshman of the Year."></my-slide>
                </div>
            </div>
        `
    }
    static after() {
        var slideshows = document.querySelectorAll('[data-component="slideshow"]');
        slideshows.forEach(initSlideShow);

        function initSlideShow(slideshow) {

            var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`);

            var index = 0,
                time = 5000;
            slides[index].classList.add('active');

            setInterval(() => {
                slides[index].classList.remove('active');

                index++;
                if (index === slides.length) {
                    index = 0;
                }
                slides[index].classList.add('active');

            }, time);
        }
    }
}