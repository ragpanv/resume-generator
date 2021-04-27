import React, {Component} from 'react';
import style from "./picture.module.scss";
export class Picture extends Component {
  state = {
    profileimg:''
  };

  imageHandler = (e) => {
    var d=document.getElementById('input');
    document.getElementById('imgupload').innerHTML='';
    d.parentNode.removeChild(d);

    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ profileimg: reader.result });
        
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  render() {
    const { profileimg } = this.state;
    return (
      <div>
        <div className="img-holder">
          <img
            src={profileimg}
            alt=""
            width="180px"
            height="180px"
            id="img"
            className="img"
          />
        </div>
        <div>
          <div id="imgupload" className={style.imgupload}>
            choose your profile pic
          </div>
          <input
            type="file"
            name="image-upload"
            id="input"
            accept="images/*"
            onChange={this.imageHandler}
          />
        </div>
      </div>
    );
  }
}
