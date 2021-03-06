/*//使用公用虚拟DOM的render指令为某个特定的元素进行赋值
	ReactDOM.render(
	<h1>Hello Jeason</h1>,
	document.getElementById('root')
	);
	
	//声明变量
	const element = <h1> Hello Jeason </h1>;

	//声明函数
	function formatName(user){
		
		//使用三目运算实现条件的区分
		return user ? user.firstName + ' ' + user.lastName : world;		
		
	}
	
	//声明对象	
	const user = {
		firstName : 'Jeason',
		lastName : 'Zhang'		
	};
	
	//声明变量 注意数据拼接方式	
	const element = (
		<h4>
			Hello,{formatName(user)}!
		</h4>
	);
	
	//使用render指令为指定元素赋值
	ReactDOM.render(
		element,
		document.getElementById('root')		
	);
	*/
	/****************数组************************/
	/*const names = ['Jeason','Lucy','Mark'];
	
	//JSX规则遇见<使用HtmL标签解析 遇到{}使用Javascript解析
	ReactDOM.render(
	<div>{
		names.map(function(name){
			
			return <div>Hello,{name}!</div>
			
		})
	}</div>,
	document.getElementById('root')
	);
	
	const arr=[
		<h3> This is header </h3>,
		<h4> This is subHeader </h4>,
	];
	
	ReactDOM.render(
	<div>{arr}</div>,
	document.getElementById('root')
	);*/
	
	/*****************组件************************/
	/*//组件第一个字母必须大写 且只能包含一个顶层
	var HelloMessage = React.createClass(
		{
			render:function() {
				return <h4>Hello {this.props.name}</h4>;
			}
			
		}
	);
	//组件属性添加时需要注意 class要使用className for要写出htmlFor class 和for是js的保留字
	ReactDOM.render(
		<HelloMessage	name = 'Jeason'/>,
		document.getElementById('root')		
	);*/
	
	
	/******************特殊组件***********************/
	//ol标签后面还有一个{}
	/*var NodeLists =React.createClass({
		render:function(){
			return (
				<ol>
					{
							React.Children.map(this.props.children,function(child){
								return <li>{child}</li>;						
							})								
					}
				
				</ol>				
			);			
		}		
	});
	

	ReactDOM.render(
	<NodeLists>
		<span>Jeason</span>
		<span>Lucy</span>
	</NodeLists>,
	document.getElementById('root')	
	);*/

/****************************组件验证************************************/
//类型错误是可以执行的？不够会报错	
/*var MyTitle = React.createClass({
	propTypes:{
		title:React.PropTypes.string.isRequired,
	},
	
	render:function(){
		return <h3>{this.props.title}</h3>;
	}
	
});
const data=123;
ReactDOM.render(
<MyTitle title={data} ></MyTitle>,document.getElementById('root')
);*/
/****************获取默认属性并赋值***********************/
/*var MyTitle = React.createClass({
	getDefaultProps:function(){
			return {
				title:'Hello world'				
			};
	},
	
	render:function(){
		return <h3>{this.props.title}</h3>;
	}
	
});
ReactDOM.render(
	<MyTitle title='Jeason'/>,document.getElementById('root')
);*/

/****************************事件获取DOM节点*******************************/
/*var MyComponent = React.createClass({
	handleClick:function(){
		this.refs.myTextInput.focus();		
	},	
	render:function(){
		return (
			<div>
					<input type="text" ref='myTextInput' />
					<input type="button" name="" id="" value="Focus the text input" onClick={this.handleClick}/>
			</div>		
		);
		
	}
});	

ReactDOM.render(
<MyComponent />,
document.getElementById('root')
);*/
	
/*******************状态***************************/	
//this.state和this.props的区别    this.state 主要是可以变化的属性  而this.props一旦定下就不会变化的情形
/*var LikeButton = React.createClass({
	getInitialState:function(){
		
		return {liked:false};
		
	},	
	handleClick:function(event){
		
		this.setState({liked:!this.state.liked});
		
	},	
	render:function(){
		var text = this.state.liked?'like':'Do not like';
		return (
			<p onClick={this.handleClick}>
				You {text} this ,please click toggle
			</p>
		);
		
	}
});

ReactDOM.render(
<LikeButton />,
document.getElementById('root')
);*/
/*****************************Form 组件*********************************/
	/*const InputComponent = React.createClass({
		getInitialState:function(){
			return {value:'Hello'};
		},
		handleChange:function(event){
			this.setState({value:event.target.value});
			
		},
		render:function(){
			var value=this.state.value;
			return (
			<div>
				<input type="text" value={value}  onChange={this.handleChange}/>
				<p>{value}</p>
			</div>			
			)			
		}		
	});
	ReactDOM.render(
		<InputComponent />,
	document.getElementById('root')
	);*/

	/******************************组件时机********************************/
		/*var lifeForComponent = React.createClass({
			getInitialState: function () {
		    return {
		      opacity: 1.0,
		    };
		  },
			componentDidMount:function(){
				this.timer = setInterval(function () {
		      var opacity = this.state.opacity;
		      opacity -= 0.05;
		      if (opacity < 0.1) {
		        opacity = 1.0;
		      }
		      this.setState({
		        opacity: opacity
		      });
		    }.bind(this), 100);
				
			},			
			 render: function () {
		    return (
		      <div style={{opacity: this.state.opacity}}>
		        Hello {this.props.name}
		      </div>
		    );
		  }
		});
		ReactDOM.render(
			<lifeForComponent name='Jeason'/>,
			document.getElementById('root')		
		)*/
		
		/*var Hello = React.createClass({
		  getInitialState: function () {
		    return {
		      opacity: 1.0
		    };
		  },
		
		  componentDidMount: function () {
		    this.timer = setInterval(function () {
		      var opacity = this.state.opacity;
		      opacity -= .05;
		      if (opacity < 0.1) {
		        opacity = 1.0;
		      }
		      this.setState({
		        opacity: opacity
		      });
		    }.bind(this), 100);
		  },
		
		  render: function () {
		    return (
		      <div style={{opacity: this.state.opacity}}>
		        Hello {this.props.name}
		      </div>
		    );
		  }
		});
		
		ReactDOM.render(
		  <Hello name="world"/>,
		  document.body
		);*/
		
	/*************************Ajax*****************************/

/*var RepoList = React.createClass({
  getInitialState: function() {
    return { loading: true, error: null, data: null};
  },

  componentDidMount() {
    this.props.promise.then(
      value => this.setState({loading: false, data: value}),
      error => this.setState({loading: false, error: error}));
  },

  render: function() {
    if (this.state.loading) {
      return <span>Loading...</span>;
    }
    else if (this.state.error !== null) {
      return <span>Error: {this.state.error.message}</span>;
    }
    else {
      var repos = this.state.data.items;
      var repoList = repos.map(function (repo) {
        return (
          <li>
            <a href={repo.html_url}>{repo.name}</a> ({repo.stargazers_count} stars) <br/> {repo.description}
          </li>
        );
      });
      return (
        <main>
          <h1>Most Popular JavaScript Projects in Github</h1>
          <ol>{repoList}</ol>
        </main>
      );
    }
  }
});		
	ReactDOM.render(
  <RepoList
    promise={$.getJSON('https://api.github.com/search/repositories?q=javascript&sort=stars')}
  />,
  document.body
);*/

