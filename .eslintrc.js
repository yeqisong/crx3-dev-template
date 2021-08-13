module.exports = {
    root         : true,
    parserOptions: {
        parser    : 'babel-eslint',
        sourceType: 'module'
    },
    env: {
        browser: true,
        node   : true,
        es6    : true
    },
    extends: [
        'plugin:vue/vue3-recommended',
        'eslint:recommended'
    ],
    plugins: [
        'html',
        'vue',
        'prettier'
    ],
    rules: {
        'vue/max-attributes-per-line': [2, {
            singleline: 10,
            multiline : {
                max           : 1,
                allowFirstLine: false
            }
        }],
        'vue/html-indent': [
            'error',
            4,
            {
                attribute                : 1,
                baseIndent               : 1,
                closeBracket             : 0,
                alignAttributesVertically: true,
                ignores                  : []
            }
        ],
        'vue/singleline-html-element-content-newline': 'off',
        'vue/multiline-html-element-content-newline' : 'off',
        'vue/name-property-casing'                   : ['error', 'PascalCase'],
        'vue/no-v-html'                              : 'off',
        'vue/no-multiple-template-root'              : 'off',
        'vue/no-v-model-argument'                    : 'off',
        'vue/script-setup-uses-vars'                 : 'off',
        'accessor-pairs'                             : 2,
        // 禁止或强制在代码块中开括号前和闭括号后有空格
        'block-spacing'                              : [2, 'always'],
        // 强制在代码块中使用一致的大括号风格
        'brace-style'                                : [2, '1tbs', {
            allowSingleLine: true
        }],
        camelcase: [0, {
            properties: 'always'
        }],
        // 要求或禁止末尾逗号
        'comma-dangle' : [2, 'never'],
        // 强制在逗号前后使用一致的空格
        'comma-spacing': [1, {
            before: false,
            after : true
        }],
        // 强制使用一致的逗号风格
        'comma-style'              : [2, 'last'],
        // 禁止或强制在计算属性中使用空格
        'computed-property-spacing': 'error',
        'constructor-super'        : 2,
        // 要求遵循大括号约定 (curly)
        curly                      : [2, 'multi-line'],
        // 强制在点号之前或之后换行
        'dot-location'             : [2, 'property'],
        'eol-last'                 : 2,
        // 要求使用 === 和 !==
        eqeqeq                     : ['error', 'always', { null: 'ignore' }],
        // 要求或禁止在函数标识符和其调用之间有空格
        'func-call-spacing'        : 'error',
        'handle-callback-err'      : [2, '^(err|error)$'],
        indent                     : ['error', 4, {
            VariableDeclarator: 'first',
            MemberExpression  : 1,
            ArrayExpression   : 'first',
            ImportDeclaration : 'first'
        }],
        // indent: [2, 2, {
        //   SwitchCase: 1
        // }],
        // 强制在 JSX 属性中一致地使用双引号或单引号
        'jsx-quotes' : [2, 'prefer-single'],
        // 强制在对象字面量的属性中键和值之间使用一致的间距
        'key-spacing': [2, {
            beforeColon: false,
            afterColon : true,
            align      : 'colon'
        }],
        // 强制在关键字前后使用一致的空格
        'keyword-spacing': [2, {
            before: true,
            after : true
        }],
        // 强制使用一致的换行风格
        'linebreak-style': 'error',
        // 要求构造函数首字母大写
        'new-cap'        : [2, {
            newIsCap: true,
            capIsNew: false
        }],
        // 强制或禁止调用无参构造函数时有圆括号
        'new-parens'              : 2,
        // 禁用 Array 构造函数
        'no-array-constructor'    : 2,
        'no-caller'               : 2,
        // 禁用 console
        'no-console'              : 'off',
        'no-class-assign'         : 2,
        'no-cond-assign'          : 2,
        'no-const-assign'         : 2,
        'no-control-regex'        : 0,
        'no-delete-var'           : 2,
        'no-dupe-args'            : 2,
        'no-dupe-class-members'   : 2,
        'no-dupe-keys'            : 2,
        'no-duplicate-case'       : 2,
        'no-empty-character-class': 2,
        // 空方法
        'no-empty-function'       : ['error', { allow: ['methods'] }],
        'no-empty-pattern'        : 2,
        'no-eval'                 : 2,
        'no-ex-assign'            : 2,
        'no-extend-native'        : 2,
        // 禁止不必要的函数绑定
        'no-extra-bind'           : 2,
        'no-extra-boolean-cast'   : 2,
        // 禁止不必要的括号
        'no-extra-parens'         : [2, 'functions'],
        // 禁用不必要的标签
        'no-extra-label'          : 'error',
        'no-fallthrough'          : 2,
        // 禁止浮点小数
        'no-floating-decimal'     : 2,
        'no-func-assign'          : 2,
        // 禁止对原生对象或只读的全局对象进行赋值
        'no-global-assign'        : ['error', { exceptions: ['Object'] }],
        // 禁用隐式的eval()
        'no-implied-eval'         : 2,
        'no-inner-declarations'   : [2, 'functions'],
        'no-invalid-regexp'       : 2,
        'no-irregular-whitespace' : 2,
        // 禁用迭代器
        'no-iterator'             : 2,
        // 不允许标签与变量同名
        'no-label-var'            : 2,
        'no-labels'               : [2, {
            allowLoop  : false,
            allowSwitch: false
        }],
        // 禁用不必要的嵌套块
        'no-lone-blocks'          : 2,
        'no-mixed-spaces-and-tabs': 2,
        // 禁止出现多个空格
        'no-multi-spaces'         : [2, {
            exceptions: {
                BinaryExpression  : true,
                VariableDeclarator: true,
                ImportDeclaration : true
            }
        }],
        'no-multi-str'           : 2,
        // 不允许有空行
        'no-multiple-empty-lines': [2, {
            // 最大空行数
            max: 1
        }],
        'no-native-reassign'          : 2,
        'no-negated-in-lhs'           : 2,
        // 禁用 Object 的构造函数
        'no-new-object'               : 2,
        // 禁止调用 require 时使用 new 操作符
        'no-new-require'              : 2,
        'no-new-symbol'               : 2,
        // 此规则目的在于消除通过 new 操作符使用 String、Number 和 Boolean 。
        'no-new-wrappers'             : 2,
        'no-obj-calls'                : 2,
        'no-octal'                    : 2,
        // 该规则禁止在字符串字面量中使用八进制转义序列。
        'no-octal-escape'             : 2,
        'no-path-concat'              : 2,
        // 禁用__proto__
        'no-proto'                    : 2,
        'no-redeclare'                : 2,
        'no-regex-spaces'             : 2,
        'no-return-assign'            : [2, 'except-parens'],
        'no-self-assign'              : 2,
        // 禁止自身比较
        'no-self-compare'             : 2,
        'no-sequences'                : 2,
        'no-shadow-restricted-names'  : 2,
        'no-spaced-func'              : 2,
        'no-sparse-arrays'            : 2,
        'no-this-before-super'        : 2,
        // 此规则目的在于保持异常抛出的一致性，通过禁止抛出字面量和那些不可能是 Error 对象的表达式。
        'no-throw-literal'            : 2,
        // 禁用行尾空格
        'no-trailing-spaces'          : 2,
        // 未使用的变量
        'no-undef'                    : 0,
        // 禁止将变量初始化为 undefined
        'no-undef-init'               : 2,
        // 禁止出现令人困惑的多行表达式
        'no-unexpected-multiline'     : 2,
        // 禁用一成不变的循环条件
        'no-unmodified-loop-condition': 2,
        // 禁止可以在有更简单的可替代的表达式时使用三元操作符
        'no-unneeded-ternary'         : [2, {
            defaultAssignment: false
        }],
        // 禁止在 return、throw、continue 和 break 语句之后出现不可达代码
        'no-unreachable'       : 2,
        // 禁止对关系运算符的左操作数使用否定操作符
        'no-unsafe-negation'   : 'error',
        // 禁止在 finally 语句块中出现控制流语句
        'no-unsafe-finally'    : 2,
        // 此规则旨在消除不使用的表达式，这些表达式对程序的状态没有影响。
        'no-unused-expressions': 'error',
        // 禁止出现未使用过的变量
        'no-unused-vars'       : [0, {
            vars: 'all',
            args: 'none'
        }],
        // 禁止不必要的 .call() 和 .apply()
        'no-useless-call'              : 2,
        // 禁止在变量定义之前使用它们
        'no-use-before-define'         : 'error',
        // 禁止没有必要的字符拼接
        'no-useless-concat'            : 'error',
        // 禁用不必要的转义字符
        'no-useless-escape'            : 0,
        // 禁止使用void操作符
        'no-void'                      : 'error',
        // 禁止属性前有空白
        'no-whitespace-before-property': 2,
        // 禁用 with 语句
        'no-with'                      : 2,
        // 强制函数中的变量要么一起声明要么分开声明
        'one-var'                      : [2, {
            initialized: 'never'
        }],
        // 强制操作符使用一致的换行符
        'operator-linebreak': [2, 'after', {
            overrides: {
                '?': 'before',
                ':': 'before'
            }
        }],
        // 要求或禁止块内填充
        'padded-blocks': [2, 'never'],
        // 强制使用一致的反勾号、双引号或单引号
        quotes         : [2, 'single', {
            avoidEscape          : true,
            allowTemplateLiterals: true
        }],
        // 要求对象字面量属性名称使用引号
        'quote-props' : ['error', 'as-needed'],
        // 要求或禁止使用分号代替 ASI
        semi          : [2, 'never'],
        // 强制分号之前和之后使用一致的空格
        'semi-spacing': [2, {
            before: false,
            after : true
        }],
        // 强制在块之前使用一致的空格
        'space-before-blocks'        : [2, 'always'],
        // 强制在 function的左括号之前使用一致的空格
        'space-before-function-paren': [0, 'never'],
        // 强制在圆括号内使用一致的空格
        'space-in-parens'            : [2, 'never'],
        // 要求操作符周围有空格
        'space-infix-ops'            : 2,
        // 强制在一元操作符前后使用一致的空格
        'space-unary-ops'            : [2, {
            words   : true,
            nonwords: false
        }],
        // 强制在注释中 // 或 /* 使用一致的空格
        'spaced-comment': [2, 'always', {
            markers: ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
        }],
        // 要求或禁止 Unicode 字节顺序标记 (BOM)
        'unicode-bom'         : 'error',
        // 要求使用 isNaN() 检查 NaN
        'use-isnan'           : 2,
        // 强制 typeof 表达式与有效的字符串进行比较
        'valid-typeof'        : 2,
        // 该规则要求所有的立即执行函数表达式使用括号包裹起来。
        'wrap-iife'           : [2, 'any'],
        // 要求或者禁止Yoda条件
        yoda                  : [2, 'never'],
        // 禁用 debugger
        'no-debugger'         : process.env.NODE_ENV === 'production' ? 2 : 0,
        // 强制在大括号中使用一致的空格
        'object-curly-spacing': [2, 'always', {
            objectsInObjects: false
        }],
        // 强制数组方括号中使用一致的空格
        'array-bracket-spacing': [2, 'never'],
        /*
         * ECMAScript 6
         */
        // 该规则可以强制或禁止在箭头函数体的周围使用大括号。
        'arrow-body-style'     : 'error',
        // 无论参数如何，该规则都会在箭头函数参数周围加上括号
        // "always" （默认）在所有情况下都需要参数。
        // "as-needed" 当只有一个参数时允许省略参数。
        'arrow-parens'         : ['error', 'as-needed'],
        // 规则在箭头函数的箭头（=>）之前/之后标准化间距样式。
        'arrow-spacing'        : [2, {
            before: true,
            after : true
        }],
        // 强制 generator 函数中 * 号周围使用一致的空格
        'generator-star-spacing': [2, {
            before: true,
            after : true
        }],
        // 禁止重复模块导入
        'no-duplicate-imports'   : 'error',
        'no-useless-computed-key': 2,
        'no-useless-constructor' : 2,
        // 禁止在 import 和 export 和解构赋值时将引用重命名为相同的名字
        'no-useless-rename'      : 'error',
        // 不允许有var
        'no-var'                 : 'error',
        // 要求或禁止对象字面量中方法和属性使用简写语法
        'object-shorthand'       : 'error',
        // 要求回调函数使用箭头函数
        'prefer-arrow-callback'  : 'error',
        // 变量优先const
        'prefer-const'           : 0,
        // 禁用 parseInt() 和 Number.parseInt()，使用二进制，八进制和十六进制字面量
        'prefer-numeric-literals': 'error',
        // 要求使用剩余参数而不是 arguments
        'prefer-rest-params'     : 'error',
        // 要求使用扩展运算符而非 .apply()
        'prefer-spread'          : 'error',
        // 强制剩余和扩展运算符及其表达式之间有空格
        'rest-spread-spacing'    : 'error',
        // 要求或禁止模板字符串中的嵌入表达式周围空格的使用
        'template-curly-spacing' : [2, 'never'],
        // 强制在 yield* 表达式中 * 周围使用空格
        'yield-star-spacing'     : [2, 'both']
    }
}
