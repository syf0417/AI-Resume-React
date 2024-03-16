import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Cards from '../components/cards'
import './f-information-page.css'

const FInformationPage = (props) => {
  return (
    <div className="f-information-page-container">
      <Helmet>
        <title>F-InformationPage - AI Resume</title>
        <meta property="og:title" content="F-InformationPage - AI Resume" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name3"></Navbar>
      <div className="f-information-page-testimonial-card">
        <h1 className="f-information-page-text">将简历拖拽至此处</h1>
        <button type="button" className="f-information-page-button button">
          上传文件
        </button>
        <div className="f-information-page-testimonial"></div>
        <span className="f-information-page-text01">
          将文件大小控制在6M以内，支持格式pdf/.doc/.docx/.jpg/.png上传成功后，可选择解析简历并填充，便于后续填写、修改。
        </span>
      </div>
      <div className="f-information-page-container01">
        <div className="f-information-page-container02">
          <div className="f-information-page-container03">
            <div className="f-information-page-container04">
              <h1 className="f-information-page-text02">目标岗位：</h1>
              <input
                type="text"
                placeholder="请输入目标岗位"
                className="f-information-page-textinput input"
              />
            </div>
          </div>
        </div>
        <button type="button" className="button f-information-page-button1">
          确认
        </button>
      </div>
      <h1 className="f-information-page-text03">基本信息：</h1>
      <div className="f-information-page-container05">
        <div className="f-information-page-container06">
          <section className="f-information-page-cards">
            <div className="f-information-page-container07">
              <span className="f-information-page-text04">姓</span>
              <span className="f-information-page-text05">手机号码</span>
              <span className="f-information-page-text06">微信号</span>
            </div>
            <div className="f-information-page-container08">
              <input
                type="text"
                placeholder="请输入你的姓氏"
                className="f-information-page-textinput01 input"
              />
              <input
                type="text"
                placeholder="请输入你的手机号码"
                className="f-information-page-textinput02 input"
              />
              <input
                type="text"
                placeholder="请输入你的微信号"
                className="f-information-page-textinput03 input"
              />
            </div>
          </section>
        </div>
        <div className="f-information-page-container09">
          <section className="f-information-page-cards01">
            <div className="f-information-page-container10">
              <span className="f-information-page-text07">名</span>
              <span className="f-information-page-text08">邮箱</span>
            </div>
            <div className="f-information-page-container11">
              <input
                type="text"
                placeholder="请输入你的名字"
                className="f-information-page-textinput04 input"
              />
              <input
                type="text"
                placeholder="请输入你的邮箱"
                className="f-information-page-textinput05 input"
              />
            </div>
          </section>
        </div>
      </div>
      <h1 className="f-information-page-text09">教育经历：</h1>
      <div className="f-information-page-container12">
        <section className="f-information-page-cards02">
          <div className="f-information-page-container13">
            <span className="f-information-page-text10">学历</span>
            <span className="f-information-page-text11">城市</span>
            <span className="f-information-page-text12">起止时间</span>
            <span className="f-information-page-text13">专业</span>
          </div>
          <div className="f-information-page-container14">
            <input
              type="text"
              placeholder="请输入你的学历"
              className="f-information-page-textinput06 input"
            />
            <input
              type="text"
              placeholder="请输入你的城市"
              className="f-information-page-textinput07 input"
            />
            <input
              type="text"
              placeholder="请输入起止时间"
              className="f-information-page-textinput08 input"
            />
            <input
              type="text"
              placeholder="请输入你的专业"
              className="f-information-page-textinput09 input"
            />
          </div>
        </section>
        <section className="f-information-page-cards03">
          <div className="f-information-page-container15">
            <span className="f-information-page-text14">学校名称</span>
            <span className="f-information-page-text15">国家</span>
            <span className="f-information-page-text16">院系</span>
            <span className="f-information-page-text17">GPA</span>
          </div>
          <div className="f-information-page-container16">
            <input
              type="text"
              placeholder="请输入你的学校名称"
              className="f-information-page-textinput10 input"
            />
            <input
              type="text"
              placeholder="请输入你的国籍"
              className="f-information-page-textinput11 input"
            />
            <input
              type="text"
              placeholder="请输入你的就读院系"
              className="f-information-page-textinput12 input"
            />
            <input
              type="text"
              placeholder="请输入你的绩点"
              className="f-information-page-textinput13 input"
            />
          </div>
        </section>
      </div>
      <div className="f-information-page-container17">
        <section className="f-information-page-cards04">
          <div className="f-information-page-container18">
            <span className="f-information-page-text18">获奖记录</span>
            <span className="f-information-page-text19">主修课程</span>
          </div>
          <div className="f-information-page-container19">
            <textarea
              placeholder="列出您在学术、体育或任何其他领域获得的重要奖项，例如‘2019年全国数学竞赛一等奖’或‘2020年大学生创新创业比赛金奖’。"
              className="f-information-page-textarea textarea"
            ></textarea>
            <textarea
              placeholder="列出与您申请职位相关的重要课程，例如‘高级编程技术’、‘市场营销原理’或‘数据分析基础’。"
              className="f-information-page-textarea1 textarea"
            ></textarea>
          </div>
        </section>
      </div>
      <button type="button" className="f-information-page-button2 button">
        <span className="f-information-page-text20">
          <span>添加学历</span>
          <br></br>
        </span>
      </button>
      <h1 className="f-information-page-text23">工作/实习经历</h1>
      <div className="f-information-page-container20">
        <section className="f-information-page-cards05">
          <div className="f-information-page-container21">
            <span className="f-information-page-text24">类型</span>
            <span className="f-information-page-text25">职位</span>
            <span className="f-information-page-text26">就职时间</span>
          </div>
          <div className="f-information-page-container22">
            <input
              type="text"
              placeholder="如实习、全职"
              className="f-information-page-textinput14 input"
            />
            <input
              type="text"
              placeholder="请输入你职位类型"
              className="f-information-page-textinput15 input"
            />
            <input
              type="text"
              placeholder="请输入你的就职时间"
              className="f-information-page-textinput16 input"
            />
          </div>
        </section>
      </div>
      <Cards
        text="工作内容"
        text1="成就与贡献"
        rootClassName="cards-root-class-name"
        textareaPlaceholder="简要描述您在此职位的主要职责和日常任务，例如‘负责产品设计和开发流程，协调团队成员确保项目按时完成’。"
        textareaPlaceholder1="突出您在工作中的重要成就或贡献，例如‘通过优化流程提高了生产效率15%’或‘领导团队完成重要项目，使公司年收入增长20%’。"
      ></Cards>
      <button type="button" className="f-information-page-button3 button">
        <span className="f-information-page-text27">
          <span>添加工作/实习经历</span>
          <br></br>
        </span>
      </button>
      <h1 className="f-information-page-text30">项目经历</h1>
      <div className="f-information-page-container23">
        <section className="f-information-page-cards06">
          <div className="f-information-page-container24">
            <span className="f-information-page-text31">项目名称</span>
            <span className="f-information-page-text32">起止时间</span>
          </div>
          <div className="f-information-page-container25">
            <input
              type="text"
              placeholder="请输入项目名称"
              className="f-information-page-textinput17 input"
            />
            <input
              type="text"
              placeholder="请输入项目的起止时间"
              className="f-information-page-textinput18 input"
            />
          </div>
        </section>
      </div>
      <Cards
        text="项目描述"
        text1="项目成就"
        rootClassName="cards-root-class-name1"
        textareaPlaceholder="详细描述您参与的项目，包括项目目标、您的角色、使用的技术或方法，例如‘作为主要开发者参与了移动应用开发项目，负责前端设计和功能实现，使用了React Native技术’。"
        textareaPlaceholder1="强调您在项目中取得的具体成就或对项目的贡献，如‘成功优化应用性能，提升用户体验，帮助应用在应用商店中获得4.8分的高评分’或‘我的团队合作和领导能力带领项目按时完成，超过了预期的业务目标’。"
      ></Cards>
      <button type="button" className="f-information-page-button4 button">
        <span>
          <span>添加项目经历</span>
          <br></br>
        </span>
      </button>
      <h1 className="f-information-page-text36">获奖信息</h1>
      <div className="f-information-page-container26">
        <section className="f-information-page-cards07">
          <div className="f-information-page-container27">
            <span className="f-information-page-text37">获奖类型</span>
            <span className="f-information-page-text38">获奖时间</span>
          </div>
          <div className="f-information-page-container28">
            <input
              type="text"
              placeholder="请输入获奖类型"
              className="f-information-page-textinput19 input"
            />
            <input
              type="text"
              rows="请输入获奖时间"
              placeholder="请输入你的邮箱"
              className="f-information-page-textinput20 input"
            />
          </div>
        </section>
      </div>
      <section className="f-information-page-cards08">
        <div className="f-information-page-container29">
          <span className="f-information-page-text39">奖项说明</span>
        </div>
        <div className="f-information-page-container30">
          <textarea
            placeholder="详细描述该奖项的重要性和竞争程度，以及您为获得此奖项所作出的具体贡献。例如，‘获得全国数学竞赛金奖，该奖项仅颁发给前5%的参赛者，我通过研究先进算法和创新解决方案，成功解决了复杂的数学难题’。"
            className="f-information-page-textarea2 textarea"
          ></textarea>
        </div>
      </section>
      <button type="button" className="f-information-page-button5 button">
        <span>
          <span>添加获奖信息</span>
          <br></br>
        </span>
      </button>
      <h1 className="f-information-page-text43">语言能力</h1>
      <div className="f-information-page-container31">
        <section className="f-information-page-cards09">
          <div className="f-information-page-container32">
            <span className="f-information-page-text44">语言</span>
            <span className="f-information-page-text45">证书类型</span>
          </div>
          <div className="f-information-page-container33">
            <input
              type="text"
              placeholder="如英语、法语"
              className="f-information-page-textinput21 input"
            />
            <input
              type="text"
              placeholder="如四级、六级、雅思"
              className="f-information-page-textinput22 input"
            />
          </div>
        </section>
        <section className="f-information-page-cards10">
          <div className="f-information-page-container34">
            <span className="f-information-page-text46">熟练程度</span>
            <span className="f-information-page-text47">分数</span>
          </div>
          <div className="f-information-page-container35">
            <input
              type="text"
              placeholder="请输入该语言的熟练程度"
              className="f-information-page-textinput23 input"
            />
            <input
              type="text"
              placeholder="请输入证书对应的分数"
              className="f-information-page-textinput24 input"
            />
          </div>
        </section>
      </div>
      <button type="button" className="f-information-page-button6 button">
        <span>
          <span>添加语言能力</span>
          <br></br>
        </span>
      </button>
      <h1 className="f-information-page-text51">技能</h1>
      <div className="f-information-page-container36">
        <section className="f-information-page-cards11">
          <div className="f-information-page-container37">
            <span className="f-information-page-text52">技能名称</span>
          </div>
          <div className="f-information-page-container38">
            <input
              type="text"
              placeholder="请输入你的技能"
              className="f-information-page-textinput25 input"
            />
          </div>
        </section>
        <section className="f-information-page-cards12">
          <div className="f-information-page-container39">
            <span className="f-information-page-text53">熟练程度</span>
          </div>
          <div className="f-information-page-container40">
            <input
              type="text"
              placeholder="请输入技能的熟练程度"
              className="f-information-page-textinput26 input"
            />
          </div>
        </section>
      </div>
      <div className="f-information-page-container41">
        <div className="f-information-page-container42"></div>
      </div>
      <button type="button" className="f-information-page-button7 button">
        <span className="f-information-page-text54">
          <span>添加技能</span>
          <br></br>
        </span>
      </button>
      <Link
        to="/f-resume-preview"
        className="f-information-page-navlink button"
      >
        <span>
          <span>下一步</span>
          <br></br>
        </span>
      </Link>
    </div>
  )
}

export default FInformationPage
