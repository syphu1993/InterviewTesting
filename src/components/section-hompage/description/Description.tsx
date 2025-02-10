import BoxCode from "../../box-code/BoxCode";
import "./description.scss";
import imgTriangle from "../../../assets/images/icon-park.png";
import Button from "../../button/Button";
import { LineLoader } from "../../../model/LineLoader.";
import MyImage from "../../my-image/MyImage";

const Description: React.FC = () => {
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

  const listLoaders: LineLoader[] = [
    { id: 1, width: "80%" },
    { id: 2, width: "40%" },
    { id: 3, width: "100%" },
  ];

  return (
    <div className="container-description flex-row space-between">
      <div className="cover-box">
        <BoxCode
          contentCode={contentCode}
          widthContent={323}
          backgroundTool="#000000"
          listLineLoaders={listLoaders}
        />
        <div className="cover-img">
           <MyImage src={imgTriangle}  alt={"Triangle decoration"}/>
        </div>  
      </div>

      <div className="content">
        <p className="large-title">The language for building web pages</p>
        <span>
          Go live on a fast, reliable, and hassle-free hosting network that
          scales with your business with one click and go code!
        </span>
        <div className="hidden-sm">
          <Button
            width="259px"
            height={75}
            paddingX={24}
            paddingY={24}
            radius={2}
            background="#000000"
            isIcon={true}
            color="#ffffff"
            fontSize={22}
            content="Try it Yourself"
          />
        </div>
        <div className="hidden-lg">
          <Button
            width="100%"
            height={60}
            paddingX={100}
            paddingY={24}
            radius={2}
            background="#000000"
            isIcon={true}
            color="#DDF247"
            fontSize={16}
            content="Try it Yourself"
          />
        </div>
      </div>
    </div>
  );
};

export default Description;
