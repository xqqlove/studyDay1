var hangge=function (select) {
    return hangge.prototype.init(select);
}

hangge.prototype={
    init:function (select) {
        this.id_obj=null;
        if(select!=null && typeof select=="object"){
            this.id_obj=select;
            return this;
        }
        if(select!=null &&typeof select=="string" && document.getElementById(select)!=null){
            this.id_obj=document.getElementById(select);
            return this;
        }
        return this;
    },

    //判断对象是否为空
    isNull:function (n) {
        if(n==null){
            return true;
        }
        return false;
    },
    html:function (v) {
       if(!this.isNull(this.id_obj)){
           if(v==undefined){
               return this.id_obj.innerHTML;
           }else if(v!=null){
               this.id_obj.innerHTML=v;
           }
       }else {
           return null;
       }
    },

    attr:function (k,v) {
        if(!this.isNull(this.id_obj)){
            if(k!=null&&v==undefined){
                return this.id_obj.getAttribute(k);
            }else if(k!=null&&v!=null){
                this.id_obj.setAttribute(k,v);
            }
        }else {
            return null;
        }
    },
    
    ready:function (fn) {
        document.onreadystatechange=function () {
            if(document.readyState=="complete"){
                fn();
            }
        }
        
    },

    parent:function () {
        if(this.isNull(this.id_obj)) return god();
        return hangge(this.id_obj.parentNode);
    }

}