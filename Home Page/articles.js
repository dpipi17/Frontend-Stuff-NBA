import Article from './Custom Elements/article.js'

export default class HomePage {
    static render(params) {
        return `
            <div class="articles">
                <my-article imageSrc="https://cdn.nba.com/manage/2021/01/kawhi-laughs-high-fives-scaled.jpg" 
                            title="Clippers jump Lakers for No. 1"
                            text="See where all 30 teams rank after the first six weeks of the 2020-21 season..."
                            date="2 hours ago"></my-article>
                
                
                <my-article imageSrc="https://cdn.nba.com/manage/2021/01/wiseman-intro-iso-scaled-e1611769078115.jpg" 
                            title="Kia Rookie Ladder"
                            text="Several first-year players have impressed as the Rookie of the Year chase continues..."
                            date="8 hours ago"></my-article>
                            
                
                <my-article imageSrc="https://cdn.nba.com/manage/2021/01/USATSI_13996448-scaled-e1611940664997.jpg" 
                            title="Zion and Giannis"
                            text="The path Bucks star Giannis Antetokounmpo pursued in his rise..."
                            date="2 days ago"></my-article>
                            
                            
                <my-article imageSrc="https://cdn.nba.com/manage/2021/01/GettyImages-1230268858-scaled-e1611766343523.jpg" 
                            title="La battle"
                            text="When the LA Clippers and Los Angeles Lakers opened the 2019-20 season last October..."
                            date="5 days ago"></my-article>
                            
                        
                <my-article imageSrc="https://cdn.nba.com/manage/2021/01/lillard-winner.jpg" 
                            title="Dame time"
                            text="Dame Lillard Hit 2 Crazy Threes In Final 10 Seconds To Beat Bulls..."
                            date="6 days ago"></my-article>
                            
                            
                <my-article imageSrc="https://cdn.nba.com/manage/2020/12/20201230_gt_herro.mp4-1609375233286.png" 
                            title="Herro may miss"
                            text="Miami Heat second-year guard Tyler Herro revealed that someone who lives with him tested..."
                            date="6 days ago"></my-article>
                            
                        
                <my-article imageSrc="https://cdn.nba.com/manage/2020/12/nba-logo-court.jpg" 
                            title="Season Schedule"
                            text="League announces three game modifications for next week.."
                            date="7 days ago"></my-article>
                            
                
                <my-article imageSrc="https://cdn.nba.com/manage/2021/01/nba-ball-general-view-iso.jpg" 
                            title="NBA game postponements"
                            text="The NBA's COVID-19 protocols have resulted in multiple games being postponed..."
                            date="7 days ago"></my-article>
            </div>
        `
    }
}