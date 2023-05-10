"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[585],{585:function(n,e,t){t.r(e),t.d(e,{default:function(){return R}});var r,o,i,a,s,p,x,d,l,u,c,b,m,f,h,g,Z=t(5048),j=t(1566),v=t(168),w=t(4926),y=w.Z.div(r||(r=(0,v.Z)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n"]))),k=w.Z.h1(o||(o=(0,v.Z)(["\n  margin-bottom: 10px;\n  text-align: center;\n  font-weight: 500;\n"]))),z=w.Z.h2(i||(i=(0,v.Z)(["\n  margin-bottom: 10px;\n  \n"]))),C=w.Z.div(a||(a=(0,v.Z)(["\n  /* width: 500px;\n  border: 1px solid #000000;\n  padding: 15px;\n  margin-bottom: 20px; */\n  /* margin-right: 0 auto;\n  margin-left: 0 auto; */\n"]))),L=w.Z.ul(s||(s=(0,v.Z)(["\n"]))),N=t(885),A=t(6983),_=t(719),P=w.Z.li(p||(p=(0,v.Z)(["\n display: flex;\njustify-content: space-evenly;\n&:not(:last-child) {\n  margin-bottom: 5px;\n}\n"]))),S=w.Z.p(x||(x=(0,v.Z)([""]))),I=w.Z.button(d||(d=(0,v.Z)(["\n  margin-left: auto;\n  margin-bottom: 5px;\n  border-radius: 15px 225px 255px 15px 15px 255px 225px 15px;\n  border-style: solid;\n  border-width: 2px;\n  box-shadow: rgba(0, 0, 0, .2) 15px 28px 25px -18px;\n  box-sizing: border-box;\n  color: #41403e;\n  cursor: pointer;\n  display: inline-block;\n  font-family: Neucha, sans-serif;\n  font-size: 0.7rem;\n  outline: none;\n  padding: 2px 15px;\n  text-decoration: none;\n  transition: all 235ms ease-in-out;\n  border-bottom-left-radius: 15px 255px;\n  border-bottom-right-radius: 225px 15px;\n  border-top-left-radius: 255px 15px;\n  border-top-right-radius: 15px 225px;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  &:hover {\n    cursor: pointer;\n    background-color: #cc2b2b;\n    box-shadow: rgba(0, 0, 0, .3) 2px 8px 8px -5px;\n    transform: translate3d(0, 2px, 0);\n  }\n  &:focus {\n    box-shadow: rgba(0, 0, 0, .3) 2px 8px 4px -6px;\n  } \n"]))),Y=t(184),q=function(n){var e=n.id,t=n.name,r=n.number,o=(0,A.Nt)(),i=(0,N.Z)(o,2),a=i[0],s=i[1].isLoading;return(0,Y.jsxs)(P,{children:[(0,Y.jsxs)(S,{children:[t,":",r]}),(0,Y.jsx)(I,{type:"button",onClick:function(){a(e)},disabled:s,children:(0,Y.jsx)(_.SW4,{})})]},e)},F=t(9652),K=t(8504),X=t(9656),$=function(){var n=(0,A.wY)(),e=n.data,t=n.isLoading,r=n.error,o=(0,Z.v9)(F.zK),i=e&&e.filter((function(n){return n.name.toLowerCase().includes(o.toLowerCase())})),a=e&&!t&&i.length>0;return(0,Y.jsxs)(L,{children:[a&&i.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,Y.jsx)(q,{id:e,name:t,number:r},e)})),t&&(0,Y.jsx)(K.$,{}),r&&(0,Y.jsx)(X.jj,{children:"You have some problems."})]})},B=t(2791),D=t(5218),E=w.Z.div(l||(l=(0,v.Z)(["\n  width: 480px;\n  border: 1px solid #000000;\n  padding: 15px;\n  margin-bottom: 20px;\n"]))),J=w.Z.form(u||(u=(0,v.Z)([""]))),M=w.Z.label(c||(c=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 10px;\n"]))),T=w.Z.input(b||(b=(0,v.Z)(["\n  width: 200px;\n"]))),U=w.Z.button(m||(m=(0,v.Z)(["\n  margin-bottom: 5px;\n  border-radius: 15px 225px 255px 15px 15px 255px 225px 15px;\n  border-style: solid;\n  border-width: 2px;\n  box-shadow: rgba(0, 0, 0, .2) 15px 28px 25px -18px;\n  box-sizing: border-box;\n  color: #41403e;\n  cursor: pointer;\n  display: inline-block;\n  font-family: Neucha, sans-serif;\n  font-size: 0.8rem;\n  outline: none;\n  padding: 3px 14px;\n  text-decoration: none;\n  transition: all 235ms ease-in-out;\n  border-bottom-left-radius: 15px 255px;\n  border-bottom-right-radius: 225px 15px;\n  border-top-left-radius: 255px 15px;\n  border-top-right-radius: 15px 225px;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  &:hover {\n    cursor: pointer;\n    background-color: #56c064;\n    font-weight: 700;\n  }\n"]))),W=function(){var n=(0,A.wY)().data,e=(0,A.Lr)(),t=(0,N.Z)(e,1)[0],r=(0,B.useState)(""),o=(0,N.Z)(r,2),i=o[0],a=o[1],s=(0,B.useState)(""),p=(0,N.Z)(s,2),x=p[0],d=p[1],l=function(e){var r=null===n||void 0===n?void 0:n.map((function(n){return n.name.toLowerCase()}));(null===r||void 0===r?void 0:r.includes(e.name.toLowerCase()))?D.ZP.error("".concat(i," is already in contacts.")):(t(e),a(""),d(""),D.ZP.success("".concat(i," is successfully added!")))},u=function(n){"name"===n.target.name?a(n.target.value):d(n.target.value)};return(0,Y.jsx)(E,{children:(0,Y.jsxs)(J,{onSubmit:function(n){n.preventDefault(),l({name:i,number:x})},children:[(0,Y.jsxs)(M,{children:["Name",(0,Y.jsx)(T,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",value:i,onChange:u,required:!0})]}),(0,Y.jsxs)(M,{children:["Number",(0,Y.jsx)(T,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",value:x,onChange:u,required:!0})]}),(0,Y.jsx)(U,{type:"submit",children:"Add contact"})]})})},G=w.Z.div(f||(f=(0,v.Z)(["\n  width: 480px;\n  border: 1px solid #000000;\n  padding: 15px;\n  margin-bottom: 20px;\n"]))),H=w.Z.label(h||(h=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 10px;\n"]))),O=w.Z.input(g||(g=(0,v.Z)(["\n  width: 200px;\n"]))),Q=function(){var n=(0,Z.I0)(),e=(0,Z.v9)(F.zK);return(0,Y.jsx)(G,{children:(0,Y.jsxs)(H,{children:["Find contacts by name",(0,Y.jsx)(O,{type:"text",name:"filter",value:e,onChange:function(e){return n((0,F.hX)(e.currentTarget.value.trim()))}})]})})},R=function(){var n=(0,Z.v9)(j.um.getUserError);return(0,Y.jsx)(y,{children:(0,Y.jsxs)(C,{children:[(0,Y.jsx)(k,{children:"Phonebook"}),(0,Y.jsx)(W,{}),(0,Y.jsx)(z,{}),(0,Y.jsx)(Q,{}),(0,Y.jsx)($,{}),n&&(0,Y.jsx)(X.jj,{children:n})]})})}},9656:function(n,e,t){t.d(e,{im:function(){return u},X6:function(){return c},l0:function(){return b},__:function(){return m},II:function(){return f},zx:function(){return h},jj:function(){return g}});var r,o,i,a,s,p,x,d=t(168),l=t(4926),u=l.Z.div(r||(r=(0,d.Z)(["\n\n"]))),c=l.Z.h2(o||(o=(0,d.Z)(["\n    text-align: center;\n    font-size: 30px;\n"]))),b=l.Z.form(i||(i=(0,d.Z)(["\nmargin-left: 25px;\ndisplay: flex;\nflex-direction:column;\nalign-items: center;\n\n"]))),m=l.Z.label(a||(a=(0,d.Z)(["\nmargin-bottom: 15px;\n"]))),f=l.Z.input(s||(s=(0,d.Z)(["\nwidth: 280px;\nheight: 25px;\npadding-left: 10px;\n"]))),h=l.Z.button(p||(p=(0,d.Z)(["\nmargin-bottom: 20px;\n  border-radius: 15px 225px 255px 15px 15px 255px 225px 15px;\n  border-style: solid;\n  border-width: 2px;\n  box-shadow: rgba(0, 0, 0, .2) 15px 28px 25px -18px;\n  box-sizing: border-box;\n  color: #41403e;\n  cursor: pointer;\n  display: inline-block;\n  font-family: Neucha, sans-serif;\n  font-size: 0.8rem;\n  outline: none;\n  padding: 3px 14px;\n  text-decoration: none;\n  transition: all 235ms ease-in-out;\n  border-bottom-left-radius: 15px 255px;\n  border-bottom-right-radius: 225px 15px;\n  border-top-left-radius: 255px 15px;\n  border-top-right-radius: 15px 225px;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  &:hover {\n    color: #fff;\n    border-color: transparent;\n    background-color: #252525;\n  }\n"]))),g=l.Z.p(x||(x=(0,d.Z)(["\n    text-align: center;\n    font-size: 20px;\n    color: #d61212;\n"])))}}]);
//# sourceMappingURL=585.35e73c6b.chunk.js.map