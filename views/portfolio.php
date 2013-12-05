<section id="portfolios">
    <div class="pad">
        <h1>Portfolio</h1>
        <div id="portfolio-content">
        
        <ul>
        <?php
        foreach($portfolios as $k=>$val){
        ?>
            <li class="portfolio">
                <h2><?php echo $val['title']; ?></h2>
                <div class="preview"><img src="img/portfolio/<?php echo $val['img'];?>" alt="" width="230" /></div>
                <div class="description">
                    <?php echo $val['description'];?>
                </div>
            </li>
        <?
        }
        ?>
        </ul>
        <div class="clr"></div>
        </div>
    </div>
</section>
