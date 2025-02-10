import imageMan from "../../../../assets/images/img-man.png";
import imageLine from "../../../../assets/images/line-z.png";
import imageTriangle from "../../../../assets/images/icon-park.png";
import iconLive from "../../../../assets/icons/live-icon.png";
import BoxCode from "../../../box-code/BoxCode";
import MyImage from "../../../my-image/MyImage";

const RightContent: React.FC = () => {
  const contentCode = `
    <div>
      <span class="code-function">public function</span> index() {
        <span class="code-if">if</span>(count($data['feedbacks']) > 0) {
          $data['feedbacks'] = $this->load->model('feedback');
        } else {
          // Handle the else case
        }
        <div class="code-comment">// you can change the new variable</div>
        <div class="code-comment">// Controller Feedback pada method</div>
        $this->load->view('admin/feedback');
      }
    </div>
  `;

  return (
    <div className="hero-right">
      <BoxCode
        contentCode={contentCode}
        widthContent={264}
        position="absolute"
        backgroundTool="#F8F5F5"
        listLineLoaders={[]}
      />
      <MyImage src={imageMan} className={'img-man'} alt={"Line decoration"} />
      <MyImage src={imageLine} className={'img-line'} alt={"Line decoration"} />
      <MyImage src={imageTriangle} className={'img-triangle'} alt={"Triangle decoration"} />
      <div className="name flex-row item-center">
        <MyImage src={iconLive} alt={"Live"} />
        <span>· Name (Skill)</span>
      </div>
    </div>
  );
};

export default RightContent;
