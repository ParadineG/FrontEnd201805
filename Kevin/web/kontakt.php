
<div id="form-main">
  <div id="form-div">
    <form class="form" id="form1" action="process.php" method="post" autocomplete="on" >
      
      <p class="name">
        <input name="nimi" type="text" class="validate[required,custom[onlyLetter],length[0,100]] feedback-input" placeholder="Name" id="name" />
      </p>
      
      <p class="email">
        <input name="email" type="text" class="validate[required,custom[email]] feedback-input" id="email" placeholder="Email" />
      </p>
      
      <p class="text">
        <textarea name="sonum" class="validate[required,length[6,300]] feedback-input" id="comment" placeholder="Comment"></textarea>
      </p>
      
      
      <div class="submit">
        <input type="submit" value="SEND" class="senddata"/>
        <div class="ease"></div>
      </div>
    </form>
  </div>